/**
 * Hotel and Resort Validation Rules (Capital Development Code)
 * 
 * This file contains validation rules for Hotel and Resort (HR zone) based on the 
 * Abu Dhabi Capital Development Code (build.pdf).
 * Specific zone: HR.
 */

const ARTICLES = [
    // ═══════════════════════════════════════════════════════════════
    // Article 1 – Base District Parameters (HR)
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "1",
        "title_ar": "الاشتراطات الأساسية للمناطق الفندقية والمنتجعات",
        "title_en": "Base District Regulations (Hotel and Resort)",
        "rules": [
            {
                "rule_id": "1.1",
                "zone": "HR",
                "description_ar": "منطقة مرافق الزوار الكبرى والمرافق الفندقية والمنتجعات",
                "description_en": "Hotel and Resort zone (HR) for major visitor facilities, conference centers, and retail",
                "rule_type": "base_parameters",
                "setbacks": {
                    "street_side_m": 3.0,
                    "joined_plot_line_m": 3.0,
                    "separated_plot_line_m": 3.0
                },
                "note_en": "Base parameters (FAR, Height, Floors, Coverage) are established per N-28 during the development regulations information provision process."
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
                "description_ar": "يسمح باستخدام الفنادق والمنتجعات كاستخدام أساسي",
                "description_en": "Hotel and/or Resort is a permitted primary use",
                "permitted_uses": ["Hotel and/or Resort"],
                "use_code": "2110"
            },
            {
                "rule_id": "2.2",
                "description_ar": "يسمح بسكن الموظفين",
                "description_en": "Employee Housing is permitted",
                "permitted_uses": ["Employee Housing"],
                "use_code": "1310"
            },
            {
                "rule_id": "2.3",
                "description_ar": "الاستخدامات التجارية المحدودة (بحد أقصى 5% من المساحة الطابقية الإجمالية)",
                "description_en": "Commercial uses are permitted but limited to a maximum of 5% of the total GFA",
                "rule_type": "use_limitation",
                "max_gfa_percent": 5,
                "limitation_code": "L-29",
                "applicable_uses": [
                    "General Business Services",
                    "Finance & Insurance Services",
                    "Professional and Technical Services",
                    "Commercial Recreation",
                    "Retail Trade"
                ]
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // Article 3 – Other Facilities
    // ═══════════════════════════════════════════════════════════════
    {
        "article_id": "3",
        "title_ar": "مرافق أخرى",
        "title_en": "Other Facilities",
        "rules": [
            {
                "rule_id": "3.1",
                "description_ar": "يسمح بالمصليات في أي طابق من المبنى",
                "description_en": "Mussallah is generally allowed on any floor of the building",
                "permitted_uses": ["Mussallah"],
                "limitation_code": "L-32",
                "floors": "Any"
            },
            {
                "rule_id": "3.2",
                "description_ar": "لا يسمح بميادين الرماية أو الاستخدامات المتعلقة بها",
                "description_en": "Shooting ranges or related uses are not allowed",
                "prohibited_uses": ["Shooting range"],
                "limitation_code": "L-12"
            }
        ]
    }
];

module.exports = {
    HOTEL_RESORT_ARTICLES: ARTICLES
};
