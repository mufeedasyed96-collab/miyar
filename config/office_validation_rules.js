/**
 * Office Building Validation Rules (Capital Development Code)
 * 
 * This file contains validation rules for Office Buildings based on the 
 * Abu Dhabi Capital Development Code (build.pdf).
 * Specific zones: OB-31, OB-43, OT-55.
 */

const ARTICLES = [
    // ═══════════════════════════════════════════════════════════════
    // Article 1 – Base District Parameters (OB-31, OB-43, OT-55)
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "1",
        "title_ar": "الاشتراطات الأساسية للمناطق التجاري (المكاتب)",
        "title_en": "Base District Regulations (Office Buildings)",
        "rules": [
            {
                "rule_id": "1.1",
                "zone": "OB-31",
                "description_ar": "منطقة مباني مكاتب بارتفاع 31 متر و8.5 نسبة المساحة الطابقية",
                "description_en": "Office Building zone with 31m height and 8.5 FAR",
                "rule_type": "base_parameters",
                "max_height_m": 31,
                "max_far": 8.5,
                "max_coverage_percent": 100,
                "floors_storeys": "7 (G + M + 6)",
                "setbacks": {
                    "street_side_m": 3.0,
                    "non_street_side_joined_m": 3.0,
                    "non_street_side_separated_m": 0.0
                }
            },
            {
                "rule_id": "1.2",
                "zone": "OB-43",
                "description_ar": "منطقة مباني مكاتب بارتفاع 43 متر و12.0 نسبة المساحة الطابقية",
                "description_en": "Office Building zone with 43m height and 12.0 FAR",
                "rule_type": "base_parameters",
                "max_height_m": 43,
                "max_far": 12.0,
                "max_coverage_percent": 100,
                "floors_storeys": "10 (G + M + 9)",
                "setbacks": {
                    "street_side_m": 0.0,
                    "non_street_side_joined_m": 3.0,
                    "non_street_side_separated_m": 0.0
                }
            },
            {
                "rule_id": "1.3",
                "zone": "OT-55",
                "description_ar": "منطقة أبراج مكاتب بارتفاع 55 متر و16.0 نسبة المساحة الطابقية",
                "description_en": "Office Tower zone with 55m height and 16.0 FAR",
                "rule_type": "base_parameters",
                "max_height_m": 55,
                "max_far": 16.0,
                "max_coverage_percent": 100,
                "floors_storeys": "13 (G + M + 12)",
                "setbacks": {
                    "street_side_m": 0.0,
                    "non_street_side_joined_m": 3.0,
                    "non_street_side_separated_m": 0.0
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
                "description_ar": "يسمح بالاستخدامات التجارية (خدمات الأعمال العامة، التمويل والتأمين، والخدمات المهنية والتقنية) في جميع الطوابق المسموح بها",
                "description_en": "Commercial uses (General Business, Finance/Insurance, Professional/Technical) are permitted on all allowed floors",
                "permitted_uses": ["General Business Services", "Finance & Insurance Services", "Professional and Technical Services"],
                "floors": "All"
            },
            {
                "rule_id": "2.2",
                "description_ar": "يسمح بتجارة التجزئة والضيافة والخدمات الشخصية في الطابق الأرضي والميزانين فقط",
                "description_en": "Retail, Hospitality, and Personal Services are permitted only on Ground and Mezzanine floors",
                "permitted_uses": ["Retail Trade", "Hospitality and Personal Services"],
                "floors": ["Ground", "Mezzanine"],
                "limitation_code": "L-5, L-11"
            },
            {
                "rule_id": "2.3",
                "description_ar": "لا يمكن وضع الاستخدامات غير السكنية في نفس الطابق مع الاستخدام السكني في المبنى",
                "description_en": "Non-residential uses cannot be located above or on the same floor as residential use in a building",
                "rule_type": "use_conflict",
                "limitation_code": "L-11"
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 3 – Mezzanine Floor Regulations
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "3",
        "title_ar": "اشتراطات طابق الميزانين",
        "title_en": "Mezzanine Floor Regulations",
        "rules": [
            {
                "rule_id": "3.1",
                "description_ar": "يجب ألا تتجاوز مساحة طابق الميزانين 100% من مساحة الطابق الأرضي",
                "description_en": "Mezzanine floor area shall not exceed 100% of the ground floor area",
                "max_floor_area_ratio": 1.0,
                "validation": {
                    "check": "mezzanine_area <= ground_floor_area"
                }
            },
            {
                "rule_id": "3.2",
                "description_ar": "يجب ألا يتجاوز الارتفاع الإجمالي للطابق الأرضي والميزانين 7 أمتار",
                "description_en": "Total height of the ground floor including the mezzanine shall not exceed maximum 7m",
                "max_height_m": 7.0,
                "validation": {
                    "check": "ground_height + mezzanine_height <= 7.0"
                }
            },
            {
                "rule_id": "3.3",
                "description_ar": "يستخدم الميزانين للمكاتب أو مراكز الرعاية الصحية أو صالونات التجميل فقط",
                "description_en": "Mezzanine shall be used only as offices, Health care and Beauty Salon",
                "permitted_uses": ["Office", "Health care", "Beauty Salon"]
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 4 – Roof & Service Floor Regulations
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "4",
        "title_ar": "اشتراطات طابق السطح والخدمات",
        "title_en": "Roof and Service Floor Regulations",
        "rules": [
            {
                "rule_id": "4.1",
                "description_ar": "الحد الأقصى لتغطية مرافق الخدمات على السطح 60% بعد استيفاء جميع المتطلبات الميكانيكية",
                "description_en": "Maximum roof coverage for service facilities shall be 60% after meeting all mechanical requirements",
                "max_roof_coverage_percent": 60,
                "validation": {
                    "check": "roof_coverage <= 60"
                }
            },
            {
                "rule_id": "4.2",
                "description_ar": "الحد الأقصى للارتفاع 4 أمتار مع ارتداد 2 متر من جميع الجوانب",
                "description_en": "Maximum height is 4m with minimum setbacks of 2m from all sides",
                "max_height_m": 4.0,
                "min_setback_m": 2.0,
                "validation": {
                    "check": "roof_structure_height <= 4.0 && roof_setback >= 2.0"
                }
            },
            {
                "rule_id": "4.3",
                "description_ar": "يجب حجب المعدات الميكانيكية المثبتة على السطح عن الأنظار باستخدام شبكات أو ألواح توافق معمار المبنى",
                "description_en": "Roof-mounted mechanical facilities shall be screened from view with latticework or similar treatment",
                "requirement": "mechanical_screening",
                "max_screening_height_m": 2.0 // Above roof line per page 165
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 5 – Fences & Walls
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "5",
        "title_ar": "اشتراطات الأسوار والجدران",
        "title_en": "Fences and Walls Regulations",
        "rules": [
            {
                "rule_id": "5.1",
                "description_ar": "يجب إنشاء الأسوار على خط القسيمة بارتفاع لا يقل عن 2.00 متر ولا يزيد عن 2.50 متر من مستوى الشارع",
                "description_en": "Fences shall be constructed on the plot line and the height shall not be less than 2.00m and not more than 2.50m from the level of the street",
                "min_height_m": 2.0,
                "max_height_m": 2.5,
                "reference": "street_level",
                "validation": {
                    "check": "fence_height >= 2.0 && fence_height <= 2.5"
                }
            },
            {
                "rule_id": "5.2",
                "description_ar": "يمكن أن تكون الأسوار المواجهة للشوارع مصنوعة من هياكل شبه شفافة (حديد أو ما شابه ذلك) ولكن الخرسانة أو الطوب لا تقل عن 1.00 متر",
                "description_en": "Fences on the streets can be made of semi-transparent structures (iron or similar) but the concrete or block shall not be less than 1.00m height",
                "base_solid_height_m": 1.0,
                "permitted_materials": ["iron", "concrete", "block"]
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 6 – Projections
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "6",
        "title_ar": "اشتراطات البروزات",
        "title_en": "Projections Regulations",
        "rules": [
            {
                "rule_id": "6.1",
                "description_ar": "البروزات المعمارية (الكرانيش، المظلات، إلخ) يجب ألا تقترب من 3 أمتار من خط القسيمة غير المطل على الشارع",
                "description_en": "Architectural projections shall not extend closer than 3.0m to a non-street side plot line",
                "min_clearance_m": 3.0,
                "validation": {
                    "check": "projection_side_clearance >= 3.0"
                }
            },
            {
                "rule_id": "6.2",
                "description_ar": "يسمح ببروز بحد أقصى 2.0 متر للمظلات خلف خط القسيمة بشرط أن تكون على بعد 0.5 متر من الرصيف",
                "description_en": "Shade structures shall not project more than 2m beyond the plot limit provided they are no closer than 0.5m to the kerb",
                "max_beyond_plot_m": 2.0,
                "min_kerb_clearance_m": 0.5,
                "min_height_clearance_m": 2.1 // page 164
            },
            {
                "rule_id": "6.3",
                "description_ar": "يسمح ببروز معماري للتفاصيل فقط بحد أقصى 0.3 متر",
                "description_en": "A further projection of up to a maximum of 0.3m is allowed for architectural detailing on the building",
                "max_detailing_projection_m": 0.3
            }
        ]
    }
];

function get_all_articles() {
    return ARTICLES;
}

module.exports = {
    OFFICE_ARTICLES: ARTICLES,
    get_all_articles
};
