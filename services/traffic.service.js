const axios = require('axios');
require('dotenv').config();

const TOMTOM_API_KEY = process.env.TOMTOM_API_KEY;
const ABU_DHABI_BBOX = "54.24,24.36,54.65,24.58"; // Approx Abu Dhabi main city

// Explicitly requested fields for TomTom v5
const FIELDS_SPEC = "{incidents{type,geometry{type,coordinates},properties{id,iconCategory,magnitudeOfDelay,events{description,code},from,to,length,delay,roadNumbers}}}";

// Common Abu Dhabi Road Name Translations (Normalized Arabic keys)
const ROAD_TRANSLATIONS = {
    "شارع الملك عبدالله بن عبدالعزيز ال سعود": "King Abdullah Bin Abdulaziz Al Saud St",
    "شارع الشيخ زايد بن سلطان": "Sheikh Zayed Bin Sultan St",
    "شارع الخليج العربي": "Al Khaleej Al Arabi St",
    "شارع حمدان بن محمد": "Hamdan Bin Mohammed St",
    "شارع زايد الاول": "Zayed The First St",
    "شارع سلطان بن زايد": "Sultan Bin Zayed St",
    "شارع المطار": "Airport Road",
    "طريق المرور": "Al Muroor Rd",
    "شارع الفلاح": "Al Falah St",
    "شارع هزاع بن زايد": "Hazza Bin Zayed St",
    "طريق الكورنيش": "Corniche Rd",
    "شارع الدفاع": "Defense St",
    "شارع السعادة": "Al Saada St",
    "شارع بينونة": "Baynuna St",
    "شارع البطين": "Al Bateen St",
    "شارع الكرامة": "Al Karama St",
    "شارع مصفح": "Mussafah Rd",
    "شارع الريم": "Al Reem St",
    "شارع دلما": "Delma St",
    "شارع الشيخ راشد بن سعيد": "Sheikh Rashid Bin Saeed St",
    "شارع المقر": "Al Maqar St",
    "شارع مبارك بن محمد": "Mubarak Bin Mohammed St",
    "شارع الوفاق": "Al Wafaq St",
    "شارع ربdan": "Rabdan St",
    "شارع خالد بن الوليد": "Khalid Bin Al Walheed St",
    "شارع سيف غباش": "Saif Ghubash St",
    "شارع الحصن": "Al Hosn St",
    "شارع التراثي": "Heritage St",
    "شارع سيح السلم": "Seih As Salam St",
    "شارع الامطار": "Airport Rd",
    "شارع الصقور": "Al Falcons St",
    "شارع الجوازات": "Passports St"
};

let incidentCache = {
    data: null,
    lastUpdate: 0
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Mapping TomTom iconCategory to Arabic translations
const CATEGORY_MAP_AR = {
    0: 'بلاغ مروري',        // Unknown
    1: 'حادث مروري',        // Accident
    2: 'ضباب',              // Fog
    3: 'ظروف خطيرة',       // Dangerous Conditions
    4: 'أمطار',             // Rain
    5: 'جليد',              // Ice
    6: 'ازدحام مروري',      // Jam
    7: 'إغلاق مسار',        // Lane Closed
    8: 'إغلاق طريق',        // Road Closed
    9: 'أعمال طرق',          // Road Works
    10: 'رياح قوية',        // Wind
    11: 'فيضانات',          // Flooding
    12: 'تحويلة مرورية',    // Detour
    13: 'تجمع حوادث'        // Cluster
};

const CATEGORY_MAP_EN = {
    0: 'Traffic Report',
    1: 'Traffic Accident',
    2: 'Fog',
    3: 'Dangerous Conditions',
    4: 'Rain',
    5: 'Ice',
    6: 'Traffic Jam',
    7: 'Lane Closed',
    8: 'Road Closed',
    9: 'Road Works',
    10: 'Strong Wind',
    11: 'Flooding',
    12: 'Detour',
    13: 'Incident Cluster'
};

/**
 * Normalizes Arabic text for dictionary lookup
 */
function normalizeArabic(text) {
    if (!text) return "";
    return text
        .replace(/[أإآ]/g, "ا")
        .replace(/ى/g, "ي")
        .replace(/ة/g, "ه")
        .replace(/[\u064B-\u065F]/g, "") // Remove harakat
        .trim();
}

/**
 * Helper to detect if string contains Arabic characters
 */
function isArabic(text) {
    const pattern = /[\u0600-\u06FF]/;
    return pattern.test(text);
}

async function getTrafficIncidents() {
    const now = Date.now();

    if (incidentCache.data && (now - incidentCache.lastUpdate < CACHE_DURATION)) {
        console.log('[TrafficService] Returning cached incidents');
        return incidentCache.data;
    }

    if (!TOMTOM_API_KEY) {
        throw new Error('API Key not configured');
    }

    try {
        const url = `https://api.tomtom.com/traffic/services/5/incidentDetails?key=${TOMTOM_API_KEY}&bbox=${ABU_DHABI_BBOX}&fields=${FIELDS_SPEC}&language=en-GB`;
        const response = await axios.get(url);

        if (!response.data || !response.data.incidents) {
            return [];
        }

        const normalized = response.data.incidents.map(inc => {
            try {
                const { properties, geometry } = inc;
                if (!properties) return null;

                let coords = [24.4682, 54.3768];
                if (geometry && geometry.coordinates) {
                    if (geometry.type === 'Point') {
                        coords = [geometry.coordinates[1], geometry.coordinates[0]];
                    } else {
                        const firstPoint = Array.isArray(geometry.coordinates[0]) && typeof geometry.coordinates[0][0] === 'number'
                            ? geometry.coordinates[0]
                            : geometry.coordinates[0][0];
                        if (firstPoint && firstPoint.length >= 2) {
                            coords = [firstPoint[1], firstPoint[0]];
                        }
                    }
                }

                let severity = 'medium';
                if (properties.magnitudeOfDelay === 3 || properties.magnitudeOfDelay === 4) {
                    severity = 'high';
                }

                const event = (properties.events && properties.events.length > 0) ? properties.events[0] : {};
                const description = event.description || 'Traffic incident reported';
                const catId = properties.iconCategory || 0;

                const roadNameRaw = properties.from || 'Urban Road';
                let areaName = { en: roadNameRaw, ar: roadNameRaw };

                if (isArabic(roadNameRaw)) {
                    areaName.ar = roadNameRaw;

                    // Normalization-based lookup
                    const normalizedRoad = normalizeArabic(roadNameRaw);
                    const manualTranslation = ROAD_TRANSLATIONS[normalizedRoad];

                    if (manualTranslation) {
                        areaName.en = manualTranslation;
                        // For "from / to" cases, try to translate parts
                    } else if (roadNameRaw.includes(' / ')) {
                        const parts = roadNameRaw.split(' / ');
                        const translatedParts = parts.map(p => ROAD_TRANSLATIONS[normalizeArabic(p)] || p);
                        areaName.en = translatedParts.join(' / ');
                    } else {
                        const roadNo = properties.roadNumbers?.[0];
                        areaName.en = roadNo ? `${roadNo} (${roadNameRaw})` : roadNameRaw;
                    }
                } else {
                    areaName.en = roadNameRaw;
                    areaName.ar = 'طريق مدني';
                }

                return {
                    id: properties.id || `inc-${Math.random()}`,
                    areaName,
                    type: 'traffic',
                    severity,
                    message: {
                        en: description,
                        ar: CATEGORY_MAP_AR[catId] || 'تم الإبلاغ عن حادث مروري'
                    },
                    cause: {
                        en: CATEGORY_MAP_EN[catId] || 'Traffic Event',
                        ar: CATEGORY_MAP_AR[catId] || 'حدث مروري'
                    },
                    coordinates: coords,
                    timestamp: new Date(properties.lastReportTime || Date.now()).getTime()
                };
            } catch (err) {
                return null;
            }
        }).filter(item => item !== null);

        incidentCache.data = normalized;
        incidentCache.lastUpdate = now;
        return normalized;
    } catch (error) {
        throw error;
    }
}

module.exports = { getTrafficIncidents };
