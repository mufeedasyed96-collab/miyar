const axios = require('axios');
require('dotenv').config();

const TOMTOM_API_KEY = process.env.TOMTOM_API_KEY;
const ABU_DHABI_CENTER = "24.4682,54.3768"; // Center of Abu Dhabi
const RADIUS = 40000; // 40km radius to cover all of Abu Dhabi

let parkingCache = {
    data: null,
    lastUpdate: 0
};

const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

/**
 * Calculates a realistic simulated occupancy with spatial variance
 * @param {number} lat - Latitude of the spot
 * @param {number} lon - Longitude of the spot
 * @param {string} id - Unique ID of the spot for persona deterministic offset
 */
function getSimulatedOccupancy(lat, lon, id) {
    const hour = new Date().getHours();

    // 1. Base occupancy by time of day
    let baseOccupancy = 0;
    if (hour >= 8 && hour <= 18) baseOccupancy = 75;
    else if (hour > 18 && hour <= 23) baseOccupancy = 45;
    else baseOccupancy = 15;

    // 2. Spatial Variance (Density Factor)
    // Proximity to Abu Dhabi Island Center (Al Danah area ~ 24.48, 54.36)
    const islandLat = 24.48;
    const islandLon = 54.36;
    const distSq = Math.pow(lat - islandLat, 2) + Math.pow(lon - islandLon, 2);
    const dist = Math.sqrt(distSq); // approx degrees

    // Increase occupancy for central areas (up to +20%)
    // Al Reem, Al Maryah, Al Danah are very dense.
    const densityBoost = Math.max(0, 20 - (dist * 100)); // boost drops off with distance

    // 3. Deterministic "Personality" (Spot-specific offset)
    // Use the ID to create a stable offset between -10 and +10
    const hash = (id || "0").toString().split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const personalityOffset = (hash % 21) - 10;

    // 4. Combine and Clamp
    let finalOccupancy = baseOccupancy + densityBoost + personalityOffset + (Math.random() * 5);
    return Math.min(99, Math.max(5, Math.round(finalOccupancy)));
}

async function getParkingZones(lat, lon, radius) {
    const searchLat = lat || 24.4682;
    const searchLon = lon || 54.3768;
    const searchRadius = radius || RADIUS;

    const cacheKey = `${searchLat},${searchLon},${searchRadius}`;
    const now = Date.now();

    // Check if we have a specific cache for these parameters (simplified implementation)
    // In a production app, you might want a more robust per-query cache
    if (parkingCache.key === cacheKey && parkingCache.data && (now - parkingCache.lastUpdate < CACHE_DURATION)) {
        return parkingCache.data;
    }

    if (!TOMTOM_API_KEY) {
        throw new Error('API Key not configured');
    }

    try {
        // Use Fuzzy Search for Category 7369 (Parking)
        // language=en-GB ensures we get English names where available
        const url = `https://api.tomtom.com/search/2/categorySearch/parking.json?key=${TOMTOM_API_KEY}&lat=${searchLat}&lon=${searchLon}&radius=${searchRadius}&limit=100&language=en-GB`;
        const response = await axios.get(url, { timeout: 5000 });

        if (!response.data || !response.data.results) {
            return [];
        }

        const normalized = response.data.results.map(res => {
            const occupancy = getSimulatedOccupancy(res.position.lat, res.position.lon, res.id);
            const severity = occupancy > 90 ? 'high' : 'medium';

            // Extract a cleaner name: append address if the POI name is generic
            const poiName = res.poi?.name || 'Public Parking';
            const address = res.address?.freeformAddress || '';
            const fullName = (poiName.toLowerCase().includes('parking') && address)
                ? `${poiName} (${address.split(',')[0]})`
                : poiName;

            return {
                id: res.id,
                areaName: {
                    en: fullName,
                    ar: fullName // Placeholder for Arabic
                },
                type: 'parking',
                occupancy,
                severity,
                message: {
                    en: `${fullName} is ${occupancy}% occupied. Located at ${address}.`,
                    ar: `${fullName} مشغولة بنسبة ${occupancy}%. الموقع: ${address}.`
                },
                coordinates: [res.position.lat, res.position.lon],
                timestamp: Date.now()
            };
        });

        // Simple cache update
        parkingCache = {
            key: cacheKey,
            data: normalized,
            lastUpdate: now
        };
        return normalized;
    } catch (error) {
        console.error('[ParkingService] Error:', error.message);
        throw error;
    }
}

module.exports = { getParkingZones };
