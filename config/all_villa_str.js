/**
 * Configuration module for Structural Data Verification (All Villa)
 * Rules for checking consistency between Structural and Architectural drawings.
 */

const ALL_VILLA_STR_RULES = [
    {
        "article_id": "STR_VILLA",
        "title_ar": "التحقق من البيانات الإنشائية (جميع الفلل)",
        "title_en": "Structural Data Verification (All Villa)",
        "rules": [
            {
                "rule_id": "STR-1",
                "description_ar": "يجب أن تتطابق المساحة الطابقية الإنشائية مع المساحة المعمارية المعتمدة",
                "description_en": "Structural total floor area must match the approved architectural floor area",
                "rule_type": "area_match",
                "mapped_arch_article": "5.4",
                "architectural_area_ref": "floor_area",
                "structural_area_ref": "structural_slab_area",
                "allowed_tolerance_percent": 2,
                "severity": "fail",
                "auto_checkable": true
            },
            {
                "rule_id": "STR-2",
                "description_ar": "يجب أن تتطابق مساحة الطابق الأرضي الإنشائية مع المعمارية",
                "description_en": "Structural ground floor area must match architectural ground floor area",
                "rule_type": "area_match",
                "mapped_arch_article": "5.4",
                "floor_level": "ground_floor",
                "allowed_tolerance_percent": 2,
                "severity": "fail",
                "auto_checkable": true
            },
            {
                "rule_id": "STR-3",
                "description_ar": "يجب أن تتطابق مساحة السرداب الإنشائية مع المعمارية",
                "description_en": "Structural basement area must match architectural basement area",
                "rule_type": "area_match",
                "mapped_arch_article": "9",
                "floor_level": "basement",
                "allowed_tolerance_percent": 2,
                "severity": "fail",
                "auto_checkable": true
            },
            {
                "rule_id": "STR-4",
                "description_ar": "يجب ألا تزيد المساحة الإنشائية لطابق السطح عن المساحة المعمارية",
                "description_en": "Structural roof floor area must not exceed architectural roof floor area",
                "rule_type": "area_limit",
                "mapped_arch_article": "10",
                "floor_level": "roof",
                "comparison": "must_not_exceed",
                "allowed_tolerance_percent": 1,
                "severity": "fail",
                "auto_checkable": true
            },
            {
                "rule_id": "STR-5",
                "description_ar": "يجب أن تتطابق نسبة البناء الإنشائية مع المعمارية",
                "description_en": "Structural building footprint must match architectural building coverage",
                "rule_type": "area_match",
                "mapped_arch_article": "5.1",
                "architectural_ref": "building_coverage_area",
                "structural_ref": "structural_footprint_area",
                "allowed_tolerance_percent": 2,
                "severity": "fail",
                "auto_checkable": true
            },
            {
                "rule_id": "STR-6",
                "description_ar": "يجب أن تتطابق مساحة الملحقات الإنشائية مع المعمارية",
                "description_en": "Structural annex area must match architectural annex area",
                "rule_type": "area_match",
                "mapped_arch_article": "20",
                "applies_to": [
                    "hospitality_annex",
                    "service_annex",
                    "sports_annex"
                ],
                "allowed_tolerance_percent": 2,
                "severity": "fail",
                "auto_checkable": true
            },
            {
                "rule_id": "STR-7",
                "description_ar": "يجب أن تتطابق مساحة البروزات الإنشائية مع المعمارية المعتمدة",
                "description_en": "Structural cantilever area must match approved architectural projections",
                "rule_type": "area_match",
                "mapped_arch_article": ["6", "17"],
                "projection_area_match_required": true,
                "allowed_tolerance_percent": 1,
                "severity": "fail",
                "auto_checkable": true
            }
        ]
    }
];

module.exports = {
    ALL_VILLA_STR_RULES
};
