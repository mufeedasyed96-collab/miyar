/**
 * Residential Tower Validation Rules (Capital Development Code)
 * 
 * This file contains validation rules for Residential Towers based on the 
 * Abu Dhabi Capital Development Code (build.pdf).
 * Specific zones: R35, R43, R55.
 */

const ARTICLES = [
    // ═══════════════════════════════════════════════════════════════
    // Article 1 – Base District Parameters (R35, R43, R55)
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "1",
        "title_ar": "الاشتراطات الأساسية للمناطق السكنية (الأبراج السكنية)",
        "title_en": "Base District Regulations (Residential Towers)",
        "rules": [
            {
                "rule_id": "1.1",
                "zone": "R35",
                "description_ar": "منطقة أبراج سكنية بارتفاع 35 متر ونسبة مساحة طابقية 10.0",
                "description_en": "Residential Tower zone (R35) with 35m height and 10.0 FAR (implied)",
                "rule_type": "base_parameters",
                "max_height_m": 35,
                "max_far": 10.0,
                "max_coverage_percent": 100,
                "floors_storeys": "7 (G + M + 5)",
                "setbacks": {
                    "joined_plot_line_m": 1.5,
                    "other_sides_m": 0.0
                }
            },
            {
                "rule_id": "1.2",
                "zone": "R43",
                "description_ar": "منطقة أبراج سكنية بارتفاع 43 متر ونسبة مساحة طابقية 12.0",
                "description_en": "Residential Tower zone (R43) with 43m height and 12.0 FAR",
                "rule_type": "base_parameters",
                "max_height_m": 43,
                "max_far": 12.0,
                "max_coverage_percent": 100,
                "floors_storeys": "10 (G + M + 8)",
                "setbacks": {
                    "joined_plot_line_m": 1.5,
                    "other_sides_m": 0.0
                }
            },
            {
                "rule_id": "1.3",
                "zone": "R55",
                "description_ar": "منطقة أبراج سكنية بارتفاع 55 متر ونسبة مساحة طابقية 16.0",
                "description_en": "Residential Tower zone (R55) with 55m height and 16.0 FAR",
                "rule_type": "base_parameters",
                "max_height_m": 55,
                "max_far": 16.0,
                "max_coverage_percent": 100,
                "floors_storeys": "13 (G + M + 11)",
                "setbacks": {
                    "joined_plot_line_m": 1.5,
                    "other_sides_m": 0.0
                }
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 2 – Use Regulations
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "2",
        "title_ar": "اشتراطات الاستخدام",
        "title_en": "Use Regulations",
        "rules": [
            {
                "rule_id": "2.1",
                "description_ar": "الاستخدام الأساسي هو السكني (وحدات سكنية متعددة). يسمح بمعظم الاستخدامات غير السكنية في الطابق الأرضي باستثناء تلك المخصصة لسكان البرج فقط",
                "description_en": "Primary use is Multi-Residential. Most non-residential uses must be on the ground floor unless for residents' use only",
                "permitted_uses": ["Multi Residential Unit", "Institutional Living", "Employee Housing"],
                "non_residential_restriction": "Ground floor only (unless residents only)"
            },
            {
                "rule_id": "2.2",
                "description_ar": "يسمح باستخدام الفنادق في الطوابق المحددة (R35: 1-5, R43: 1-5, R55: 1-5)",
                "description_en": "Hotels permitted on specific floors (R35: 1-5, R43: 1-5, R55: 1-5)",
                "permitted_uses": ["Hotel"],
                "floors": "1-5"
            },
            {
                "rule_id": "2.3",
                "description_ar": "يسمح بالخدمات التجارية (البنوك، التأمين، الخدمات المهنية) في الطوابق من 1 إلى 5 مع قيود",
                "description_en": "Commercial services (Finance, Insurance, Professional) permitted on floors 1-5 with limitations",
                "permitted_uses": ["Finance & Insurance Services", "Professional and Technical Services"],
                "floors": "1-5",
                "limitation_code": "L-5"
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 3 – Mezzanine & Ground Floor Details
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "3",
        "title_ar": "تفاصيل الطابق الأرضي والميزانين",
        "title_en": "Ground & Mezzanine Floor Details",
        "rules": [
            {
                "rule_id": "3.1",
                "description_ar": "يسمح باستخدامات التجزئة والخدمات الشخصية في الطابق الأرضي فقط (أو حتى الطابق 5/10 حسب المنطقة)",
                "description_en": "Retail and Personal Services permitted primarily on Ground Floor (level 0)",
                "permitted_uses": ["Retail Trade", "Personal Services"],
                "floors": ["Ground"]
            },
            {
                "rule_id": "3.2",
                "description_ar": "في حالة توفر مواقف سيارات في الطابق الأرضي، يسمح بالاستخدامات التجارية على الشوارع الرئيسية فقط",
                "description_en": "If ground floor parking is provided, commercial uses are allowed on main streets only",
                "requirement": "Main street only if ground floor has parking"
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 4 – Development Notes (Additional Requirements)
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "4",
        "title_ar": "ملاحظات التطوير",
        "title_en": "Development Notes",
        "rules": [
            {
                "rule_id": "4.1",
                "description_ar": "تطبق هذه الاشتراطات على القسائم التي تصل مساحتها إلى 2500/3000 متر مربع. القسائم الأكبر تعامل كتطوير مخطط",
                "description_en": "Regulations apply to plots up to 2,500/3,000 sqm. Larger plots treated as Planned Development",
                "max_plot_size_m2": 3000
            },
            {
                "rule_id": "4.2",
                "description_ar": "للقسائم التي تزيد مساحتها عن 1000 متر مربع، يسمح بارتفاع إضافي يعادل ارتفاع مواقف المنصة (Podium Parking)",
                "description_en": "For plots > 1000 sqm, additional height equal to podium parking height is allowed",
                "additional_height_condition": "plot_area > 1000"
            },
            {
                "rule_id": "4.3",
                "description_ar": "طابق مواقف المنصة (Podium Parking) لا يحتسب ضمن المساحة الطابقية (GFA)",
                "description_en": "Podium Parking floor does not count towards GFA",
                "gfa_exclusion": "Podium Parking"
            }
        ]
    }
];

module.exports = {
    RESIDENTIAL_TOWER_ARTICLES: ARTICLES
};
