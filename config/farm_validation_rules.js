/**
 * Farm (Ezba) Validation Rules
 * 
 * This file contains validation rules for Farm (Ezba) plots in Abu Dhabi.
 * 
 * NOTE: The source PDF "دليل قسائم العزب (1).pdf" is image-based. 
 * These rules are based on General Abu Dhabi Agricultural Land Regulations (DMT) 
 * and serve as a template. Specific values should be verified against the manual.
 */

const ARTICLES = [
    {
        "article_id": "1",
        "title_ar": "التعريفات",
        "title_en": "Definitions",
        "terms": [
            {
                "term_ar": "العزبة",
                "term_en": "ezba",
                "definition_ar": "قسيمة أرض مخصصة للأغراض الزراعية أو تربية الثروة الحيوانية وتشمل مرافق سكنية وخدمية",
                "definition_en": "A plot designated for agricultural or livestock purposes, including residential and service facilities"
            },
            {
                "term_ar": "استراحة المزرعة",
                "term_en": "farm_resthouse",
                "definition_ar": "مبنى سكني مخصص لصاحب المزرعة وعائلته",
                "definition_en": "Residential building designated for the farm owner and family"
            }
        ]
    },
    {
        "article_id": "2",
        "title_ar": "الاستخدام المسموح به",
        "title_en": "Permitted Use",
        "rules": [
            {
                "rule_id": "2.1",
                "description_ar": "يسمح بالاستخدام الزراعي، تربية الحيوانات، ومرافق السكن والخدمات المرتبطة",
                "description_en": "Permitted uses: Agricultural, livestock, and associated residential/service facilities",
                "rule_type": "use_restriction"
            }
        ]
    },
    {
        "article_id": "3",
        "title_ar": "مكونات القسيمة",
        "title_en": "Plot Components",
        "rules": [
            {
                "rule_id": "3.1",
                "description_ar": "المكونات المسموح بها تشمل: الاستراحة، سكن العمال، المستودعات، والظائر",
                "description_en": "Permitted components: Resthouse, worker housing, warehouses, and barns",
                "permitted_components": [
                    { "component_en": "resthouse", "required": false },
                    { "component_en": "worker_housing", "required": false },
                    { "component_en": "warehouse", "required": false },
                    { "component_en": "barn", "required": false }
                ]
            }
        ]
    },
    {
        "article_id": "5",
        "title_ar": "نسبة البناء والمساحات (DMT General)",
        "title_en": "Building Coverage and Areas (DMT General)",
        "rules": [
            {
                "rule_id": "5.1",
                "description_ar": "الحد الأقصى لنسبة البناء 30% من مساحة القسيمة الزراعية",
                "description_en": "Maximum building coverage is 30% of agricultural plot area",
                "rule_type": "percentage",
                "element": "plot_coverage",
                "max_value": 30,
                "unit": "percent"
            },
            {
                "rule_id": "5.4",
                "description_ar": "الحد الأقصى لمساحة الاستراحة: 700 م2 (كتلة واحدة) أو 1000 م2 (كتل منفصلة)",
                "description_en": "Max resthouse area: 700 sqm (one envelope) or 1000 sqm (separate envelopes)",
                "rule_type": "area",
                "element": "resthouse_area",
                "max_area_m2": 1000
            },
            {
                "rule_id": "5.5",
                "description_ar": "الحد الأقصى لسكن العمال: 100 م2",
                "description_en": "Max worker housing area: 100 sqm",
                "rule_type": "area",
                "element": "worker_housing",
                "max_area_m2": 100
            },
            {
                "rule_id": "5.6",
                "description_ar": "الحد الأقصى للمستودع: 200 م2",
                "description_en": "Max warehouse area: 200 sqm",
                "rule_type": "area",
                "element": "warehouse",
                "max_area_m2": 200
            }
        ]
    },
    {
        "article_id": "6",
        "title_ar": "الارتدادات",
        "title_en": "Setbacks",
        "rules": [
            {
                "rule_id": "6.1",
                "description_ar": "الارتداد الأدنى من الشارع: 2 متر، ومن الحدود الأخرى: 1.5 متر (ما لم يذكر خلاف ذلك)",
                "description_en": "Min street setback: 2m, other boundaries: 1.5m (unless specified)",
                "rule_type": "setback",
                "constraints": [
                    { "boundary_type": "street_facing", "min_setback_m": 2.0 },
                    { "boundary_type": "neighbors", "min_setback_m": 1.5 }
                ]
            }
        ]
    },
    {
        "article_id": "8",
        "title_ar": "الارتفاعات",
        "title_en": "Heights",
        "rules": [
            {
                "rule_id": "8.1",
                "description_ar": "الحد الأقصى للارتفاع: 12 متر (G+1+R) للاستراحة",
                "description_en": "Max height: 12m (G+1+R) for resthouse",
                "rule_type": "height",
                "max_height_m": 12.0
            }
        ]
    }
];

module.exports = {
    FARM_ARTICLES: ARTICLES
};
