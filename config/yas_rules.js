/**
 * Configuration module for Yas Island architectural schema validation rules
 * Based on 'قوانين جزيرة ياس (1).pdf'
 */

// Placeholder for Yas specific rules
const YAS_ARTICLES = [
    {
        "article_id": "1",
        "title_ar": "تعريفات (جزيرة ياس)",
        "title_en": "Definitions (Yas Island)",
        "terms": [
            // TODO: Add definitions from the PDF here
            {
                "term_ar": "مثال",
                "term_en": "example",
                "definition_ar": "يرجى إضافة التعريفات من ملف الـ PDF هنا",
                "definition_en": "Please add definitions from the PDF file here"
            }
        ]
    },
    {
        "article_id": "2",
        "title_ar": "الاستخدامات المسموحة",
        "title_en": "Permitted Uses",
        "rules": [
            // TODO: Add rules from the PDF here
            {
                "rule_id": "2.1",
                "description_ar": "يرجى إضافة القواعد من ملف الـ PDF هنا",
                "description_en": "Please add rules from the PDF file here",
                "rule_type": "use_restriction"
            }
        ]
    }
];

// If you need to include standard articles, uncomment and adjust:
// const { ARTICLES: STANDARD_ARTICLES } = require('./validation_rules');
// const ALL_ARTICLES = [...STANDARD_ARTICLES, ...YAS_ARTICLES];

const ALL_ARTICLES = [...YAS_ARTICLES];

function get_article(article_id) {
    /**Get article configuration by ID.*/
    return ALL_ARTICLES.find(article => article.article_id === String(article_id)) || null;
}

function get_all_articles() {
    /**Get all articles.*/
    return ALL_ARTICLES;
}

module.exports = {
    ARTICLES: ALL_ARTICLES,
    get_article,
    get_all_articles
};
