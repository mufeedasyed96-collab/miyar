/**
 * Al Falah Application Validation Rules (Comprehensive)
 * 
 * This file is a complete validation rules set for Al Falah (F1) projects.
 * It is based on the general `validation_rules.js` structure and standard regulations,
 * but specifically OVERRIDES rules where Al Falah regulations differ.
 * 
 * KEY OVERRIDES:
 * - Article 2 (Use): Fixed Floor Area 507.69 m² (Single Model).
 * - Article 4 (Units): Strict Single Unit.
 * - Article 6 (Setbacks): Front setback 8m.
 * - Article 8 (Heights): G+1 Only (No Roof Floor, No Basement implied standard but allowed if general).
 * - Article 10 (Roof): Roof Floor Prohibited.
 * - Article 13 (Stairs): No second stair allowed.
 * - Article 14 (Fences): No modifications allowed.
 * - Article 20 (Annexes): Permitted in Front Setback (Unique).
 */

const ARTICLES = [

    {
        "article_id": "1",
        "title_ar": "التعريفات",
        "title_en": "Definitions",
        "terms": [
            {
                "term_ar": "مسؤول البناء",
                "term_en": "building_official",
                "definition_ar": "هو الشخص المكلف بإدارة تراخيص البناء في البلدية المعنية أو من ينوب عنه",
                "definition_en": "Person responsible for managing building permits in the municipality"
            },
            {
                "term_ar": "كود البناء",
                "term_en": "building_code",
                "definition_ar": "كودات أبوظبي الدولية للبناء شاملة المراجع والمعايير القياسية المشار إليها في هذه الأحكام",
                "definition_en": "Abu Dhabi International Building Codes including referenced standards"
            },
            {
                "term_ar": "السكن الخاص",
                "term_en": "private_housing",
                "definition_ar": "وحدة سكنيه تخصص لعائلة واحدة مع ملحقاتها ويدخل ضمنها الفيلات الحكومية والمساكن الشعبية",
                "definition_en": "Residential unit for single family including government villas and public housing"
            },
            {
                "term_ar": "الفيلا السكنية",
                "term_en": "residential_villa",
                "definition_ar": "وحدة سكنية منفصلة، حين يكون المبنى الرئيسي في القسيمة السكنية مخصص لأغراض سكن العائلة والذي لا يقوم البناء من دونه",
                "definition_en": "Detached residential unit, main building designated for family housing"
            },
            {
                "term_ar": "الفراغ المعيشي",
                "term_en": "living_space",
                "definition_ar": "المكان المنتفع به لغرض المعيشة ويشمل الصالات وغرف النوم وغرف المكتب وما شابه",
                "definition_en": "Space used for living including halls, bedrooms, offices"
            },
            {
                "term_ar": "الفراغ الخدمي",
                "term_en": "service_space",
                "definition_ar": "المكان المنتفع به للأغراض الخدمية ويشمل الغرف الخاصة بالخدمات والمرافق المشتركة بالمبنى",
                "definition_en": "Space for service purposes including service rooms and shared facilities"
            },
            {
                "term_ar": "الأجنحة السكنية",
                "term_en": "residential_suites",
                "definition_ar": "وحدات معيشية غير متكاملة ومغلقة داخل حيز الفيلا السكنية، تشترك مع باقي عناصر السكن في المرافق والخدمات وليس لها مدخل مستقل من خارج الفيلا السكنية",
                "definition_en": "Non-independent living units within villa sharing facilities with no separate entrance"
            },
            {
                "term_ar": "دورة المياه",
                "term_en": "toilet",
                "definition_ar": "حمام ملحق بالصالات أو المجالس دون غرف النوم ولا يستخدم لأغراض الاستحمام",
                "definition_en": "Bathroom attached to halls without bathing facilities"
            },
            {
                "term_ar": "الملاحق",
                "term_en": "annexes",
                "definition_ar": "المباني الثانوية في القسيمة السكنية وتشمل ملحق الخدمات وملحق الضيافة والملحق الرياضي والمرآب وغيرها",
                "definition_en": "Secondary buildings including service annex, hospitality annex, sports annex, garage"
            },
            {
                "term_ar": "ملحق الضيافة",
                "term_en": "hospitality_annex",
                "definition_ar": "مبنى مخصص لاستقبال الضيوف",
                "definition_en": "Building designated for receiving guests (Majlis)"
            },
            {
                "term_ar": "ملحق الخدمات",
                "term_en": "service_annex",
                "definition_ar": "مبنى مخصص للاستخدامات الخدمية للفيلا السكنية كغرف العمالة المنزلية والمطبخ والمخازن وما شابه",
                "definition_en": "Building for service uses like staff rooms, kitchen, storage"
            },
            {
                "term_ar": "المجلس",
                "term_en": "majlis",
                "definition_ar": "الفراغ المعيشي المخصص لاستقبال الضيوف في الفيلا الرئيسية أو ملحق الضيافة له مدخل مخصص للضيوف",
                "definition_en": "Living space for receiving guests with dedicated guest entrance"
            },
            {
                "term_ar": "المنشآت المؤقتة",
                "term_en": "temporary_structures",
                "definition_ar": "هي المنشآت المشيدة من عناصر ومواد خفيفة (غير الطابوق والخرسانة أو الهياكل المعدنية الثابتة) و التي لا يزيد مدة بقاؤها عن 180 يوم",
                "definition_en": "Structures built from lightweight materials not exceeding 180 days"
            },
            {
                "term_ar": "مرآب السيارات",
                "term_en": "car_garage",
                "definition_ar": "مكان مسقوف ومغلق من ثلاث جهات على الأقل مخصص لمواقف السيارات",
                "definition_en": "Covered space enclosed from at least 3 sides for parking"
            },
            {
                "term_ar": "الملحق الرياضي",
                "term_en": "sports_annex",
                "definition_ar": "مبنى مخصص لممارسة الأنشطة الرياضية",
                "definition_en": "Building for sports activities"
            },
            {
                "term_ar": "المطبخ التحضيري",
                "term_en": "pantry_kitchen",
                "definition_ar": "مطبخ صغير داخل الفيلا السكنية أو ملحق الضيافة يخصص لتجهيز الوجبات الخفيفة وتسخين الطعام",
                "definition_en": "Small kitchen for light meal preparation and reheating"
            },
            {
                "term_ar": "الشارع الفرعي",
                "term_en": "secondary_street",
                "definition_ar": "هو أي شارع يقع عليه حد من حدود القسيمة غير الشارع الرئيسي",
                "definition_en": "Any street on plot boundary other than main street"
            },
            {
                "term_ar": "نسبة البناء",
                "term_en": "building_coverage_ratio",
                "definition_ar": "النسبة المئوية لمساحة الحدود الخارجية القصوى للمباني والفراغات المسقوفة بمواد غير خفيفة من مساحة قطعة الأرض (القسيمة) عند إسقاطها أفقيا",
                "definition_en": "Percentage of maximum building footprint to plot area"
            },
            {
                "term_ar": "المساحة الطابقية",
                "term_en": "floor_area",
                "definition_ar": "مجموع المساحات داخل غلاف المبنى وتقاس من واجهات الجدران الخارجية",
                "definition_en": "Total area within building envelope measured from exterior walls"
            },
            {
                "term_ar": "المواد الخفيفة",
                "term_en": "lightweight_materials",
                "definition_ar": "مواد تستخدم لتغطية مساحة مفتوحة وتكون حاملة لنفسها فقط ويمكن إزالتها وتركيبها دون التأثير على الهيكل الإنشائي لعناصر البناء",
                "definition_en": "Self-supporting materials that can be removed without affecting structure"
            },
            {
                "term_ar": "خط البناء",
                "term_en": "building_line",
                "definition_ar": "الخط الواقع على الحدود الخارجية القصوى للإسقاط الأفقي للمباني",
                "definition_en": "Line at maximum horizontal projection of buildings"
            },
            {
                "term_ar": "الارتداد",
                "term_en": "setback",
                "definition_ar": "أقصر مسافة أفقية فاصلة بين خط البناء وحدود القسيمة",
                "definition_en": "Shortest horizontal distance between building line and plot boundary"
            },
            {
                "term_ar": "المسافة الفاصلة",
                "term_en": "separation_distance",
                "definition_ar": "هي المسافة الواقعة بين خطوط البناء للمباني المختلفة بالقسيمة السكنية",
                "definition_en": "Distance between building lines of different buildings on plot"
            },
            {
                "term_ar": "البروز",
                "term_en": "projection",
                "definition_ar": "الجزء البارز عن الحائط الخارجي للبناء لأغراض جمالية أو وظيفية",
                "definition_en": "Part projecting from exterior wall for aesthetic or functional purposes"
            },
            {
                "term_ar": "ارتفاع المبنى",
                "term_en": "building_height",
                "definition_ar": "المسافة الرأسية التي يتم قياسها من مستوى منسوب محور الطريق حتى أعلى نقطة في المبنى",
                "definition_en": "Vertical distance from road axis level to highest point of building"
            },
            {
                "term_ar": "ارتفاع الطابق",
                "term_en": "floor_height",
                "definition_ar": "صافي المسافة الرأسية من منسوب تشطيب أرضية الطابق إلى منسوب بطنية السقف الإنشائي للطابق نفسه عند أي نقطة",
                "definition_en": "Clear vertical distance from floor finish to structural ceiling soffit"
            },
            {
                "term_ar": "الفناء الداخلي",
                "term_en": "internal_courtyard",
                "definition_ar": "مساحة داخلية مفتوحة من الجهة العلوية ومحاطة بحوائط من كافة الجهات بغرض توفير التهوية والإضاءة الطبيعية",
                "definition_en": "Internal open space surrounded by walls for ventilation and natural light"
            },
            {
                "term_ar": "الفناء الخارجي",
                "term_en": "external_courtyard",
                "definition_ar": "مساحة خارجية مفتوحة من الجهة العلوية ومحاطة بحوائط من ثلاث جهات بغرض توفير التهوية والإضاءة الطبيعية",
                "definition_en": "External open space surrounded by walls on 3 sides"
            },
            {
                "term_ar": "طابق السرداب",
                "term_en": "basement_floor",
                "definition_ar": "الطابق الذي يقع جزئيا أو كليا تحت الطابق الأرضي للفيلا السكنية",
                "definition_en": "Floor partially or fully below ground floor"
            },
            {
                "term_ar": "الطابق الأرضي",
                "term_en": "ground_floor",
                "definition_ar": "أول طابق في المبنى يكون منسوب أرضيته أعلى من منسوب محور الطريق",
                "definition_en": "First floor with floor level above road axis"
            },
            {
                "term_ar": "القسائم ذات المساحات الصغيرة",
                "term_en": "small_plots",
                "definition_ar": "القسائم السكنية التي تقل مساحتها عن 350 متر مربع",
                "definition_en": "Residential plots less than 350 sqm"
            },
            {
                "term_ar": "القسائم ذات المساحات الكبيرة",
                "term_en": "large_plots",
                "definition_ar": "القسائم السكنية التي تزيد مساحتها عن عشرة آلاف متر مربع (10,000م2)",
                "definition_en": "Residential plots exceeding 10,000 sqm"
            }
        ]
    },
    {
        "article_id": "2",
        "title_ar": "الاستخدام المسموح به في القسيمة (الفلاح)",
        "title_en": "Permitted Use of Plot (Al Falah)",
        "rules": [
            {
                "rule_id": "2.1",
                "description_ar": "الاستخدام المسموح به هو السكن الخاص فقط",
                "description_en": "Permitted use is private residence only",
                "rule_type": "use_restriction"
            },
            {
                "rule_id": "2.2",
                "description_ar": "مساحة الطابق الكلية 507.69 متر مربع (نموذج موحد)",
                "description_en": "Total floor area 507.69 m2 (Single model implemented)",
                "rule_type": "area",
                "element": "total_floor_area",
                "value_m2": 507.69,
                "is_fixed_model": true,
                "override_note": "Specific Al Falah override: Fixed area 507.69m2"
            }
        ]
    },
    {
        "article_id": "3",
        "title_ar": "مكونات القسيمة (الفلاح)",
        "title_en": "Permitted Plot Components (Al Falah)",
        "rules": [
            {
                "rule_id": "3.1",
                "description_ar": "تشمل القسيمة فيلا، غرفة حارس، وغرفة كهرباء. يمكن إضافة عناصر أخرى وفق الشروط.",
                "description_en": "Plot includes villa, guard room, electrical room. Other elements can be added per conditions.",
                "permitted_components": [
                    { "component_en": "villa", "required": true },
                    { "component_en": "guard_room", "required": true },
                    { "component_en": "electrical_room", "required": true },
                    { "component_en": "swimming_pool", "required": false },
                    { "component_en": "car_park", "required": false },
                    { "component_en": "annexes", "required": false }
                ]
            }
        ]
    },
    {
        "article_id": "4",
        "title_ar": "عدد الوحدات المسموح به (الفلاح)",
        "title_en": "Permitted Number of Units (Al Falah)",
        "rules": [
            {
                "rule_id": "4.1",
                "description_ar": "فيلا سكنية واحدة فقط لكل قسيمة",
                "description_en": "Only one residential villa per plot",
                "rule_type": "quantity",
                "max_villas_per_plot": 1,
                "override_note": "Strict single unit policy."
            }
        ]
    },
    {
        "article_id": "5",
        "title_ar": "نسبة البناء والمساحة الطابقية",
        "title_en": "Building Coverage and Floor Area",
        "rules": [
            {
                "rule_id": "5.1",
                "description_ar": "الحد الأقصى لمساحة الطابق 70% من مساحة القسيمة",
                "description_en": "Maximum floor area is 70% of plot area",
                "rule_type": "percentage",
                "element": "building_coverage",
                "max_value": 70,
                "unit": "percent"
            },
            {
                "rule_id": "5.2",
                "description_ar": "تخصص النسبة الباقية للمناطق المفتوحة وتشمل الحدائق والمداخل والأفنية والممرات ومواقف السيارات وحوض السباحة ومناطق الترفيه كمناطق ألعاب الأطفال وغيرها",
                "description_en": "Remaining 30% for open areas including gardens, entrances, courtyards, parking, pool, recreation",
                "rule_type": "percentage",
                "element": "open_area",
                "min_value": 30,
                "unit": "percent"
            },
            {
                "rule_id": "5.3",
                "description_ar": "يجوز تغطية أجزاء من المساحة المفتوحة المذكورة بالبند السابق بمواد خفيفة، وتشمل المنشآت المؤقتة حسب أحكام المادة (27) من اللائحة التنفيذية مثل بيت الشعر والخيمة. على ألا تزيد نسبة هذه التغطيات عن (50%) من إجمالي المساحة المفتوحة",
                "description_en": "Lightweight coverage of open areas must not exceed 50% of total open area",
                "rule_type": "percentage",
                "element": "lightweight_coverage_of_open_area",
                "max_value": 50,
                "unit": "percent"
            }
        ]
    },
    {
        "article_id": "6",
        "title_ar": "خط البناء والارتدادات (الفلاح)",
        "title_en": "Building Line and Setbacks (Al Falah)",
        "rules": [
            {
                "rule_id": "6.1",
                "description_ar": "الارتداد الأمامي 8 متر",
                "description_en": "Front setback 8m",
                "rule_type": "setback",
                "constraints": [
                    {
                        "boundary_type": "street_facing",
                        "min_setback_m": 8.0,
                        "override_note": "Al Falah specific: 8m front setback"
                    },
                    {
                        "boundary_type": "neighbors",
                        "min_setback_m": 1.5
                    }
                ]
            },
            {
                "rule_id": "6.2",
                "description_ar": "يسمح ببناء الملاحق على حد القسيمة بدون ارتداد",
                "description_en": "Annexes permitted on plot boundary without setback",
                "rule_type": "exception",
                "element": "annexes",
                "min_setback_m": 0
            },
            {
                "rule_id": "6.3",
                "description_ar": "يسمح بعمل بروز لمظلة مدخل السيارات خارج حدود القسيمة. على ألا يزيد عن مترين (2.0م). ولا يقل ارتفاع بطنية البروز عن 4.50 متر من منسوب تشطيب الرصيف",
                "description_en": "Car entrance canopy projection outside plot max 2m, minimum soffit height 4.5m",
                "rule_type": "projection",
                "element": "car_entrance_canopy",
                "max_projection_m": 2.0,
                "min_soffit_height_m": 4.5
            }
        ]
    },
    {
        "article_id": "7",
        "title_ar": "المسافات الفاصلة بين المباني",
        "title_en": "Separation Distances Between Buildings",
        "rules": [
            {
                "rule_id": "7.1",
                "description_ar": "يجب ألا تقل المسافة الفاصلة بين الفيلا السكنية والملاحق أو أي مبنى آخر، أو بين الملاحق بعضها لبعض عن متر ونصف المتر (1.5 م)",
                "description_en": "Minimum separation between villa and annexes or between annexes is 1.5m",
                "rule_type": "separation",
                "min_separation_m": 1.5
            },
            {
                "rule_id": "7.2",
                "description_ar": "يلزم تخصيص مسافة لممرات الحركة خالية من العوائق لا تقل عن 1.1 متر",
                "description_en": "Movement corridors must be minimum 1.1m clear of obstacles",
                "rule_type": "circulation",
                "element": "movement_corridors",
                "min_width_m": 1.1
            }
        ]
    },
    {
        "article_id": "8",
        "title_ar": "عدد الطوابق والارتفاعات (الفلاح)",
        "title_en": "Number of Floors and Heights (Al Falah)",
        "rules": [
            {
                "rule_id": "8.1",
                "description_ar": "تتكون الفيلا من طابق أرضي وطابق أول فقط. غير مسموح بإضافة طابق سطح.",
                "description_en": "Villa consists of Ground Floor + First Floor only. Roof floor NOT permitted.",
                "rule_type": "floors",
                "allowed_floors": ["ground", "first"],
                "roof_floor_allowed": false,
                "override_note": "Al Falah specific: No Roof Floor."
            },
            {
                "rule_id": "8.3",
                "description_ar": "الحد الأقصى لارتفاع الفيلا السكنية (يخضع للوائح العامة ما لم يتعارض مع الطوابق)",
                "description_en": "Max height subject to general regulations (consistent with G+1)",
                "rule_type": "height"
            },
            {
                "rule_id": "8.4",
                "description_ar": "لا يقل منسوب أرضية الطابق الأرضي للفيلا السكنية عن خمسة وأربعين سنتيمتر (0.45 م) من منسوب محور الطريق",
                "description_en": "Ground floor level min 45cm above road axis",
                "rule_type": "level",
                "element": "ground_floor",
                "min_height_above_road_m": 0.45
            }
        ]
    },
    {
        "article_id": "9",
        "title_ar": "طابق السرداب",
        "title_en": "Basement Floor",
        "rules": [
            {
                "rule_id": "9.1",
                "description_ar": "يسمح ببناء طابق واحد لسرداب واحد فقط تحت الطابق الأرضي للفيلا السكنية لا يزيد ارتفاع الجزء الظاهر منه فوق سطح الأرض عن 50% من ارتفاع طابق السرداب أو (1.85 م) أيهما أقل",
                "description_en": "One basement only. Visible portion max 50% of basement height or 1.85m whichever less",
                "rule_type": "basement",
                "max_basements": 1,
                "visible_portion": {
                    "max_percent": 50,
                    "max_height_m": 1.85
                }
            },
            {
                "rule_id": "9.2",
                "description_ar": "في حال امتداد السرداب خارج حدود الطابق الأرضي للفيلا السكنية، يجب ألا تقل مساحة السرداب الممتدة أسفل حدود الطابق الأرضي للفيلا السكنية عن 40% من مساحة الطابق الأرضي",
                "description_en": "Basement extending beyond ground floor must have min 40% under ground floor footprint",
                "rule_type": "basement",
                "min_under_ground_floor_percent": 40
            },
            {
                "rule_id": "9.4",
                "description_ar": "يسمح باستخدام طابق السرداب فقط لأغراض مواقف السيارات وفراغات معيشية، وفراغات خدمية، ومطبخ وحمامات",
                "description_en": "Basement permitted uses: parking, living spaces, service spaces, kitchen, bathrooms",
                "rule_type": "use",
                "permitted_uses": ["parking", "living_spaces", "service_spaces", "kitchen", "bathrooms"]
            }
        ]
    },
    {
        "article_id": "10",
        "title_ar": "طابق السطح (الفلاح)",
        "title_en": "Roof Floor (Al Falah)",
        "rules": [
            {
                "rule_id": "10.1",
                "description_ar": "غير مسموح بإضافة طابق سطح",
                "description_en": "Roof floor is NOT permitted",
                "rule_type": "restriction",
                "roof_floor_prohibited": true,
                "override_note": "Al Falah specific: PROHIBITED."
            }
        ]
    },
    {
        "article_id": "11",
        "title_ar": "مساحات العناصر والأبعاد الداخلية",
        "title_en": "Element Areas and Internal Dimensions",
        "rules": [
            {
                "rule_id": "11.1",
                "description_ar": "صالة رئيسية: الحد الأدنى للمساحة 20 متر مربع",
                "description_en": "Main Hall: Min Area 20 m2",
                "element": "main_hall",
                "min_area_m2": 20,
                "min_width_m": 4
            },
            {
                "rule_id": "11.2",
                "description_ar": "غرفة نوم رئيسية: الحد الأدنى للمساحة 16 متر مربع",
                "description_en": "Master Bedroom: Min Area 16 m2",
                "element": "master_bedroom",
                "min_area_m2": 16,
                "min_width_m": 4
            },
            {
                "rule_id": "11.6",
                "description_ar": "مطبخ: الحد الأدنى للمساحة 12 متر مربع",
                "description_en": "Kitchen: Min Area 12 m2",
                "element": "kitchen",
                "min_area_m2": 12,
                "min_width_m": 3
            }
        ]
    },
    {
        "article_id": "12",
        "title_ar": "تهوية وإنارة المباني",
        "title_en": "Building Ventilation and Lighting",
        "rules": [
            {
                "rule_id": "12.1",
                "description_ar": "يلزم أن تتوفر لكل الفراغات المعيشية من مكونات السكن الخاص، فتحات تهوية وإنارة تطل على منطقة مفتوحة. لا يقل المسطح الزجاجي عن 8% والتهوية عن 4%",
                "description_en": "Living spaces require openings to open area. Glazed area min 8% of floor area, ventilation opening min 4%",
                "rule_type": "ventilation",
                "element": "living_spaces",
                "min_glazed_percent": 8,
                "min_ventilation_percent": 4
            }
        ]
    },
    {
        "article_id": "13",
        "title_ar": "السلالم والدرج (الفلاح)",
        "title_en": "Stairs and Steps (Al Falah)",
        "rules": [
            {
                "rule_id": "13.1",
                "description_ar": "لا يسمح بإضافة درج ثاني للفيلات القائمة",
                "description_en": "Adding a second staircase to existing villas is not permitted",
                "rule_type": "restriction",
                "second_staircase_prohibited": true,
                "override_note": "Al Falah specific: No second stair."
            }
        ]
    },
    {
        "article_id": "14",
        "title_ar": "الأسوار (الفلاح)",
        "title_en": "Fences (Al Falah)",
        "rules": [
            {
                "rule_id": "14.1",
                "description_ar": "لا يجوز تعديل الأسوار القائمة أو الإضافة عليها",
                "description_en": "Existing fences may not be modified or added to",
                "rule_type": "restriction",
                "fence_modification_prohibited": true,
                "override_note": "Al Falah specific: No modifications."
            }
        ]
    },
    {
        "article_id": "15",
        "title_ar": "المداخل",
        "title_en": "Entrances",
        "rules": [
            {
                "rule_id": "15.1",
                "description_ar": "يجب أن تكون مداخل القسيمة السكنية من جهة الشارع أو الممر المعتمدة",
                "description_en": "Plot entrances must be from approved street or corridor",
                "rule_type": "access"
            }
        ]
    },
    {
        "article_id": "16",
        "title_ar": "مواقف السيارات",
        "title_en": "Car Parking",
        "rules": [
            {
                "rule_id": "16.1",
                "description_ar": "يجب توفير مواقف سيارات داخل حدود القسيمة السكنية",
                "description_en": "Car parking must be provided within plot boundaries",
                "rule_type": "parking",
                "required": true
            },
            {
                "rule_id": "16.2",
                "description_ar": "الحد الأدنى لأبعاد موقف السيارة 3x6 متر",
                "description_en": "Min parking space dimensions 3x6m",
                "rule_type": "dimension",
                "min_width_m": 3.0,
                "min_length_m": 6.0
            }
        ]
    },
    {
        "article_id": "17",
        "title_ar": "العناصر الجمالية",
        "title_en": "Aesthetic Elements",
        "rules": [
            {
                "rule_id": "17.1",
                "description_ar": "يسمح بالعناصر الجمالية على الواجهات بما لا يتجاوز البروز المسموح به",
                "description_en": "Aesthetic elements allowed on facades within permitted projections",
                "rule_type": "aesthetic"
            }
        ]
    },
    {
        "article_id": "18",
        "title_ar": "اشتراطات تصميمية للمباني",
        "title_en": "Building Design Requirements",
        "rules": [
            {
                "rule_id": "18.2",
                "description_ar": "يمنع تقسيم الفيلا السكنية لشقق أو وحدات مستقلة",
                "description_en": "Villa subdivision into apartments or independent units prohibited",
                "rule_type": "restriction",
                "subdivision_prohibited": true
            },
            {
                "rule_id": "18.3",
                "description_ar": "يسمح بمطبخ واحد فقط في القسيمة السكنية (رئيسي)",
                "description_en": "One main kitchen per plot",
                "rule_type": "kitchen",
                "main_kitchen_max": 1
            }
        ]
    },
    {
        "article_id": "19",
        "title_ar": "الأجنحة السكنية",
        "title_en": "Residential Suites",
        "rules": [
            {
                "rule_id": "19.1",
                "description_ar": "يكون الوصول إلى مدخل الأجنحة من خلال المدخل الرئيسي للفيلا السكنية ولا يسمح بوجود مدخل منفصل لها من خارج الفيلا",
                "description_en": "Suite access only through main villa entrance, no separate external entrance",
                "rule_type": "access",
                "separate_entrance_prohibited": true
            }
        ]
    },
    {
        "article_id": "20",
        "title_ar": "الشروط الخاصة ببناء الملاحق (الفلاح)",
        "title_en": "Annex Building Requirements (Al Falah)",
        "rules": [
            {
                "rule_id": "20.1",
                "description_ar": "يمكن بناء ملاحق منفصلة في الارتداد الأمامي (لا يقل عن 2 متر)",
                "description_en": "Separate annexes allowed in front setback (min 2m)",
                "rule_type": "setback_exception",
                "location": "front_setback",
                "min_distance_m": 2.0,
                "override_note": "Al Falah specific: Front setback annexes allowed."
            },
            {
                "rule_id": "20.2",
                "description_ar": "يمنع التصاق الملاحق بالمباني القائمة",
                "description_en": "Attaching annexes to existing structures is prohibited",
                "rule_type": "restriction",
                "attachment_prohibited": true
            },
            {
                "rule_id": "20.3",
                "description_ar": "الحد الأدنى للارتفاع الداخلي للملاحق هو ثلاثة أمتار (3.00م)",
                "description_en": "Annex min internal height 3m",
                "rule_type": "height",
                "min_height_m": 3.0
            }
        ]
    },
    {
        "article_id": "21",
        "title_ar": "القسائم الخاصة",
        "title_en": "Special Plots",
        "rules": [
            {
                "rule_id": "21.1",
                "description_ar": "في حالة القسائم السكنية ذات المساحات الصغيرة وذات المساحات الكبيرة وتلك التي تخصص لاستخدام القصور يتم تطبيق الاشتراطات التخطيطية الصادرة عن الدائرة",
                "description_en": "Small plots (<350 sqm), large plots (>10,000 sqm) and palaces follow special planning requirements",
                "rule_type": "special_category"
            }
        ]
    }
]


function get_article(article_id) {
    /**Get article configuration by ID.*/
    return ARTICLES.find(article => article.article_id === String(article_id)) || null;
}


function get_all_articles() {
    /**Get all articles.*/
    return ARTICLES;
}

module.exports = {
    ARTICLES: ARTICLES,
    get_article,
    get_all_articles
};
