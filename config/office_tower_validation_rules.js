/**
 * Office Tower Validation Rules (Capital Development Code)
 * 
 * This file contains validation rules for Office Towers based on the 
 * Abu Dhabi Capital Development Code (build.pdf).
 * Specific zone: OT-55.
 */

const ARTICLES = [
    // ═══════════════════════════════════════════════════════════════
    // Article 1 – Base District Parameters (OT-55)
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "1",
        "title_ar": "الاشتراطات الأساسية للمناطق التجارية (أبراج المكاتب)",
        "title_en": "Base District Regulations (Office Towers)",
        "rules": [
            {
                "rule_id": "1.1",
                "zone": "OT-55",
                "description_ar": "منطقة أبراج مكاتب بارتفاع 55 متر ونسبة مساحة طابقية 16.0",
                "description_en": "Office Tower zone (OT-55) with 55m height and 16.0 FAR",
                "rule_type": "base_parameters",
                "max_height_m": 55,
                "max_far": 16.0,
                "max_coverage_percent": 100,
                "floors_storeys": "13 (G + M + 12)",
                "setbacks": {
                    "street_side_m": 0.0,
                    "joined_plot_line_m": 3.0,
                    "separated_plot_line_m": 0.0
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
                "description_ar": "يسمح بالاستخدامات التجارية (خدمات الأعمال العامة، التمويل والتأمين، والخدمات المهنية والتقنية) في جميع الطوابق",
                "description_en": "Commercial uses (General Business, Finance/Insurance, Professional/Technical) are permitted on all floors (1-5 and 6-12)",
                "permitted_uses": [
                    "General Business Services",
                    "Finance & Insurance Services",
                    "Professional and Technical Services"
                ],
                "floors": "1-12"
            },
            {
                "rule_id": "2.2",
                "description_ar": "يسمح بالخدمات الحكومية والقضائية والدبلوماسية في جميع الطوابق",
                "description_en": "Government, Judicial, and Diplomatic offices are permitted on all floors (1-5 and 6-12)",
                "permitted_uses": [
                    "Government Office",
                    "Judicial Facilities",
                    "Services Office or Diplomatic Offices"
                ],
                "floors": "1-12"
            },
            {
                "rule_id": "2.3",
                "description_ar": "يسمح بتجارة التجزئة والضيافة والخدمات الشخصية في الطوابق من 1 إلى 5",
                "description_en": "Retail, Hospitality, and Personal Services are permitted on floors 1-5",
                "permitted_uses": [
                    "Hospitality and Personal Services",
                    "Retail Trade"
                ],
                "floors": "1-5"
            },
            {
                "rule_id": "2.4",
                "description_ar": "يسمح بمرافق الرعاية الصحية والتعليم العالي في جميع الطوابق المحددة مع قيود معينة للطوابق الأولى",
                "description_en": "Healthcare (Clinics, Hospitals) and Higher Education are permitted on floors 1-5 and 6-12",
                "permitted_uses": [
                    "Higher Education",
                    "Clinic",
                    "Hospital",
                    "Medical Centre"
                ],
                "floors": "1-12",
                "limitation_code": "L-5 (for lower floors)"
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 3 – Development Notes & Parking
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "3",
        "title_ar": "ملاحظات التطوير والمواقف",
        "title_en": "Development Notes & Parking",
        "rules": [
            {
                "rule_id": "3.1",
                "description_ar": "تطبق هذه الاشتراطات على القسائم التي تصل مساحتها إلى 2500 متر مربع. القسائم الأكبر تعامل كتطوير مخطط",
                "description_en": "Regulations apply to plots up to 2,500 sqm. Larger plots treated as Planned Development",
                "max_plot_size_m2": 2500
            },
            {
                "rule_id": "3.2",
                "description_ar": "للقسائم التي تزي مساحتها عن 1000 متر مربع، يسمح بارتفاع إضافي يعادل ارتفاع مواقف المنصة (Podium Parking)",
                "description_en": "For plots > 1000 sqm, additional height equal to podium parking height is allowed",
                "additional_height_condition": "plot_area > 1000"
            },
            {
                "rule_id": "3.3",
                "description_ar": "طابق مواقف المنصة (Podium Parking) لا يحتسب ضمن المساحة الطابقية (GFA)",
                "description_en": "Podium Parking floor does not count towards GFA",
                "gfa_exclusion": "Podium Parking"
            },
            {
                "rule_id": "3.4",
                "description_ar": "في حالة توفر مواقف سيارات في الطابق الأرضي، يسمح بالاستخدامات التجارية على الشوارع الرئيسية فقط",
                "description_en": "If ground floor parking is provided, uses shall be allowed on main street only (L-5)",
                "requirement": "Main street only if ground floor has parking"
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 4 – Other Facilities
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "4",
        "title_ar": "مرافق أخرى",
        "title_en": "Other Facilities",
        "rules": [
            {
                "rule_id": "4.1",
                "description_ar": "يسمح بالمصليات في أي طابق من المبنى",
                "description_en": "Mussallah is generally allowed on any floor of the building (L-32)",
                "permitted_uses": ["Mussallah"],
                "floors": "Any"
            },
            {
                "rule_id": "4.2",
                "description_ar": "يسمح بالأنشطة الترفيهية الداخلية في الطوابق 1-5 و6-12",
                "description_en": "Indoor Recreation permitted on floors 1-5 and 6-12 (L-5, L-12)",
                "permitted_uses": ["Indoor Recreation"],
                "floors": "1-12"
            }
        ]
    }
];

module.exports = {
    OFFICE_TOWER_ARTICLES: ARTICLES
};
