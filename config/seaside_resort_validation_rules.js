/**
 * Seaside Resort (الإستراحات البحرية) Validation Rules
 * 
 * This file contains validation rules for Seaside Resort plots in Abu Dhabi.
 * Source: "إشتراطات بناء الإستراحات البحرية" (Technical Regulations Governing
 *         the Construction of Seaside Rest Areas)
 */

const ARTICLES = [
    // ═══════════════════════════════════════════════════════════════
    // Article 1 – Definitions
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "1",
        "title_ar": "التعريفات",
        "title_en": "Definitions",
        "terms": [
            {
                "term_ar": "الاستراحة البحرية",
                "term_en": "seaside_resort",
                "definition_ar": "استراحة خاصة تقع على الساحل البحري ومخصصة للاستجمام والسكن المؤقت",
                "definition_en": "A private rest area located on the seacoast, designated for recreation and temporary residence"
            },
            {
                "term_ar": "خط البناء",
                "term_en": "building_line",
                "definition_ar": "المسافة بين أعلى خط مد للساحل ومنطقة البناء المسموح بها داخل القسيمة",
                "definition_en": "Distance between the highest tide of the coastline to the building area within the plot"
            },
            {
                "term_ar": "رصيف القوارب",
                "term_en": "boat_berth",
                "definition_ar": "منطقة مخصصة لرسو القوارب تحتاج إلى موافقة الجهات المعنية",
                "definition_en": "A designated area for boat mooring that requires approval from relevant authorities"
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 2 – Permitted Use & Components
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "2",
        "title_ar": "الاستخدام المسموح به والمكونات",
        "title_en": "Permitted Use and Components",
        "rules": [
            {
                "rule_id": "2.1",
                "description_ar": "يسمح باستخدام القسيمة كاستراحة بحرية للاستجمام والسكن المؤقت",
                "description_en": "The plot is permitted for use as a seaside resort for recreation and temporary residence",
                "rule_type": "use_restriction"
            },
            {
                "rule_id": "2.2",
                "description_ar": "المكونات المسموح بها تشمل: مبنى الاستراحة الرئيسي ومباني الخدمات",
                "description_en": "Permitted components include: main rest area building and service buildings",
                "permitted_components": [
                    { "component_en": "main_rest_area", "component_ar": "مبنى الاستراحة الرئيسي", "required": true },
                    { "component_en": "service_buildings", "component_ar": "مباني الخدمات", "required": false },
                    { "component_en": "boat_berth", "component_ar": "رصيف القوارب", "required": false }
                ]
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 3 – Building Coverage Ratio
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "3",
        "title_ar": "نسبة البناء",
        "title_en": "Building Coverage Ratio",
        "rules": [
            {
                "rule_id": "3.1",
                "description_ar": "الحد الأقصى لمساحة البناء الإجمالية على الأرض 1000 متر مربع أو 30%، أيهما أقل",
                "description_en": "The maximum total building area on the land is 1000 sqm or 30%, whichever is less",
                "rule_type": "percentage",
                "element": "plot_coverage",
                "max_area_m2": 1000,
                "max_value": 30,
                "unit": "percent",
                "condition": "whichever_is_less",
                "validation": {
                    "check": "min(plot_area * 0.30, 1000)",
                    "error_en": "Total building area exceeds the maximum allowed (1000 sqm or 30% of plot area, whichever is less)",
                    "error_ar": "مساحة البناء الإجمالية تتجاوز الحد الأقصى المسموح به (1000 م2 أو 30% من مساحة القسيمة، أيهما أقل)"
                }
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 4 – Building Line, Setbacks & Projections
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "4",
        "title_ar": "خط البناء والارتدادات والبروزات",
        "title_en": "Building Line, Setbacks, and Projections",
        "rules": [
            {
                "rule_id": "4.1",
                "description_ar": "ارتداد 20 متر من خط أعلى مد الساحل للاستراحات البحرية الواقعة في المناطق والجزر التالية: جزيرة الشليلة، جزيرة العالية، جزيرة رمحان، جزيرة مراوح، جزيرة دلما، جزيرة رأس غميص، جزيرة الفاي، الشويهات، بركاء، الواحدة، السلع",
                "description_en": "20m setback from highest tide line for seaside resorts located within the following islands and areas: Al Shalilah Island, Al Aliyah Island, Ramhan Island, Marawah Island, Dalma Island, Ras Ghamis Island, Al Fay Island, Al Shuwaihat, Barakah, Al Wahida, Al Sila",
                "rule_type": "setback",
                "element": "coastal_setback",
                "constraints": [
                    {
                        "boundary_type": "coastline_highest_tide",
                        "min_setback_m": 20.0,
                        "applies_to": "specific_islands_and_areas",
                        "areas": [
                            "Al Shalilah Island",
                            "Al Aliyah Island",
                            "Ramhan Island",
                            "Marawah Island",
                            "Dalma Island",
                            "Ras Ghamis Island",
                            "Al Fay Island",
                            "Al Shuwaihat",
                            "Barakah",
                            "Al Wahida",
                            "Al Sila"
                        ]
                    }
                ],
                "validation": {
                    "check": "coastal_setback_m >= 20.0",
                    "error_en": "Coastal setback must be at least 20m for resorts in designated islands/areas",
                    "error_ar": "يجب أن يكون الارتداد من خط الساحل 20 متر على الأقل للاستراحات في الجزر والمناطق المحددة"
                }
            },
            {
                "rule_id": "4.2",
                "description_ar": "ارتداد 1.50 متر من خط أعلى مد الساحل للاستراحات البحرية الواقعة خارج المناطق المذكورة أعلاه",
                "description_en": "1.50m setback from highest tide line for seaside resorts located outside the above areas",
                "rule_type": "setback",
                "element": "coastal_setback",
                "constraints": [
                    {
                        "boundary_type": "coastline_highest_tide",
                        "min_setback_m": 1.5,
                        "applies_to": "other_areas"
                    }
                ],
                "validation": {
                    "check": "coastal_setback_m >= 1.5",
                    "error_en": "Coastal setback must be at least 1.50m for resorts outside designated islands",
                    "error_ar": "يجب أن يكون الارتداد من خط الساحل 1.50 متر على الأقل للاستراحات خارج الجزر المحددة"
                }
            },
            {
                "rule_id": "4.3",
                "description_ar": "تستثنى مباني الخدمات من شرط الارتداد ويمكن بناؤها على الجدران الجانبية بشرط عدم فتح أي فتحات تطل على الخارج والحصول على موافقة الجار صاحب القسيمة المجاورة",
                "description_en": "Service buildings are excluded from setback requirements and can be built on side walls, provided no openings are made overlooking the outside and approval is obtained from the neighbor who owns the adjacent plot",
                "rule_type": "setback_exception",
                "element": "service_buildings_setback",
                "conditions": [
                    {
                        "condition_en": "no_external_openings",
                        "condition_ar": "عدم فتح أي فتحات تطل على الخارج",
                        "required": true
                    },
                    {
                        "condition_en": "neighbor_approval",
                        "condition_ar": "الحصول على موافقة الجار صاحب القسيمة المجاورة",
                        "required": true
                    }
                ]
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 5 – Number of Floors, Heights & Levels
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "5",
        "title_ar": "عدد الطوابق والارتفاعات والمناسيب",
        "title_en": "Number of Floors, Heights, and Levels",
        "rules": [
            {
                "rule_id": "5.1",
                "description_ar": "الحد الأقصى لارتفاع مبنى الاستراحة الرئيسي 8 أمتار",
                "description_en": "The main rest area building is permitted to be built with a height not exceeding 8m",
                "rule_type": "height",
                "element": "main_building_height",
                "max_height_m": 8.0,
                "validation": {
                    "check": "main_building_height_m <= 8.0",
                    "error_en": "Main rest area building height exceeds the maximum allowed 8m",
                    "error_ar": "ارتفاع مبنى الاستراحة الرئيسي يتجاوز الحد الأقصى المسموح به 8 أمتار"
                }
            },
            {
                "rule_id": "5.2",
                "description_ar": "يمكن تجاوز حد الارتفاع عند استخدام عناصر معمارية مميزة مثل القباب أو أبراج الرياح أو تشكيلات معمارية مشابهة بشرط ألا يتجاوز الارتفاع الكلي 10 أمتار",
                "description_en": "Height limit may be exceeded when using distinctive architectural elements such as domes, wind towers, or similar architectural formations, provided total height does not exceed 10m",
                "rule_type": "height",
                "element": "architectural_elements_height",
                "max_height_m": 10.0,
                "exception_for": ["domes", "wind_towers", "similar_architectural_formations"],
                "validation": {
                    "check": "total_height_m <= 10.0",
                    "error_en": "Total height with architectural elements exceeds the maximum allowed 10m",
                    "error_ar": "الارتفاع الكلي مع العناصر المعمارية يتجاوز الحد الأقصى المسموح به 10 أمتار"
                }
            },
            {
                "rule_id": "5.3",
                "description_ar": "منسوب أرضية الاستراحة لا يقل عن 0.45 متر ولا يزيد عن 1.20 متر من منسوب محور الطريق الرئيسي",
                "description_en": "The floor level of the rest area is no less than 0.45m and no more than 1.20m from the level of the main road axis",
                "rule_type": "level",
                "element": "floor_level",
                "min_level_m": 0.45,
                "max_level_m": 1.20,
                "reference": "main_road_axis",
                "validation": {
                    "check": "floor_level_m >= 0.45 && floor_level_m <= 1.20",
                    "error_en": "Floor level must be between 0.45m and 1.20m from the main road axis level",
                    "error_ar": "يجب أن يكون منسوب الأرضية بين 0.45 و 1.20 متر من منسوب محور الطريق الرئيسي"
                }
            },
            {
                "rule_id": "5.4",
                "description_ar": "يجب أن يحقق الارتفاع المقترح النسب المطلوبة لإنشاء واجهة معمارية مميزة",
                "description_en": "The proposed height achieves the required proportions to create a distinctive architectural facade",
                "rule_type": "design_requirement",
                "element": "facade_proportions",
                "validation": {
                    "check": "architectural_facade_proportions_approved",
                    "error_en": "Proposed height does not meet the required proportions for a distinctive architectural facade",
                    "error_ar": "الارتفاع المقترح لا يحقق النسب المطلوبة للواجهة المعمارية المميزة"
                }
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 6 – Design Requirements
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "6",
        "title_ar": "اشتراطات التصميم",
        "title_en": "Design Requirements",
        "rules": [
            {
                "rule_id": "6.1",
                "description_ar": "يمكن بناء الأسقف من الحديد أو الألمنيوم وتغطيتها بألمنيوم مزدوج العزل، أو أسقف خرسانية مسبقة الصنع أو مصبوبة أو مصبوبة في الموقع",
                "description_en": "Roofs may be constructed from iron or aluminum and covered with double-insulated aluminum, or prefabricated, cast, or cast-in-place concrete roofs",
                "rule_type": "material_specification",
                "element": "roof_construction",
                "permitted_materials": [
                    {
                        "material_en": "iron_frame_with_aluminum_cladding",
                        "material_ar": "حديد مع تغطية ألمنيوم مزدوج العزل",
                        "insulation": "double_insulated"
                    },
                    {
                        "material_en": "aluminum_frame_with_aluminum_cladding",
                        "material_ar": "ألمنيوم مع تغطية ألمنيوم مزدوج العزل",
                        "insulation": "double_insulated"
                    },
                    {
                        "material_en": "prefabricated_concrete",
                        "material_ar": "خرسانة مسبقة الصنع"
                    },
                    {
                        "material_en": "cast_concrete",
                        "material_ar": "خرسانة مصبوبة"
                    },
                    {
                        "material_en": "cast_in_place_concrete",
                        "material_ar": "خرسانة مصبوبة في الموقع"
                    }
                ]
            },
            {
                "rule_id": "6.2",
                "description_ar": "يجب تركيب الهيكل مثل الهياكل المصنوعة من الحديد أو الألمنيوم أو الخشب أو الطوب والمعتمدة من الدائرة لهذا الاستخدام على أساسات ثابتة",
                "description_en": "The structure (iron, aluminum, wood, or brick) approved by the department must be installed on stable foundations",
                "rule_type": "structural_requirement",
                "element": "foundation",
                "permitted_structural_materials": ["iron", "aluminum", "wood", "brick"],
                "conditions": [
                    {
                        "condition_en": "department_approved",
                        "condition_ar": "معتمدة من الدائرة",
                        "required": true
                    },
                    {
                        "condition_en": "stable_foundations",
                        "condition_ar": "أساسات ثابتة",
                        "required": true
                    }
                ],
                "validation": {
                    "check": "structure_material_approved && foundation_type == 'stable'",
                    "error_en": "Structure must be approved by the department and installed on stable foundations",
                    "error_ar": "يجب أن يكون الهيكل معتمداً من الدائرة ومركباً على أساسات ثابتة"
                }
            },
            {
                "rule_id": "6.3",
                "description_ar": "يسمح باستخدام المواد المؤقتة أو الهياكل الجاهزة",
                "description_en": "The use of temporary materials or prefabricated structures is permitted",
                "rule_type": "material_specification",
                "element": "temporary_materials",
                "permitted": true
            },
            {
                "rule_id": "6.4",
                "description_ar": "يسمح باستخدام بلاط الأسمنت للأرضيات",
                "description_en": "Cement tiles are permitted for use in flooring",
                "rule_type": "material_specification",
                "element": "flooring",
                "permitted_materials": [
                    {
                        "material_en": "cement_tiles",
                        "material_ar": "بلاط الأسمنت"
                    }
                ]
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 7 – Boat Berth Requirements
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "7",
        "title_ar": "اشتراطات رصيف القوارب",
        "title_en": "Boat Berth Requirements",
        "rules": [
            {
                "rule_id": "7.1",
                "description_ar": "يجب الحصول على موافقة الجهات المعنية (مركز النقل وخفر السواحل) لإنشاء رصيف القوارب",
                "description_en": "Approval must be obtained from the relevant authorities (Transport Center and Coast Guard) for boat berth construction",
                "rule_type": "approval_requirement",
                "element": "boat_berth",
                "required_approvals": [
                    {
                        "authority_en": "Transport Center",
                        "authority_ar": "مركز النقل"
                    },
                    {
                        "authority_en": "Coast Guard",
                        "authority_ar": "خفر السواحل"
                    }
                ],
                "validation": {
                    "check": "transport_center_approval && coast_guard_approval",
                    "error_en": "Boat berth requires approval from both the Transport Center and Coast Guard",
                    "error_ar": "يتطلب رصيف القوارب موافقة من مركز النقل وخفر السواحل"
                }
            }
        ]
    }
];

module.exports = {
    SEASIDE_RESORT_ARTICLES: ARTICLES
};
