const express = require('express');
const router = express.Router();
const trafficService = require('../services/traffic.service');
const parkingService = require('../services/parking.service');

// Existing incidents route
router.get('/incidents', async (req, res) => {
    try {
        const incidents = await trafficService.getTrafficIncidents();
        res.json({ success: true, data: incidents });
    } catch (error) {
        console.error('Traffic API Error:', error.message);
        res.status(500).json({ success: false, error: 'Failed to fetch traffic incidents' });
    }
});

// New parking route
router.get('/parking', async (req, res) => {
    try {
        const { lat, lon, radius } = req.query;
        const zones = await parkingService.getParkingZones(
            lat ? parseFloat(lat) : undefined,
            lon ? parseFloat(lon) : undefined,
            radius ? parseInt(radius) : undefined
        );
        res.json({ success: true, data: zones });
    } catch (error) {
        console.error('Parking API Error:', error.message);
        res.status(500).json({ success: false, error: 'Failed to fetch parking data' });
    }
});

module.exports = router;
