// Translation utility using Google Gemini API
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.GEMINI_API_KEY || '');

// Cache translations to avoid redundant API calls
const translationCache = new Map<string, string>();

export type SupportedLanguage = 'en' | 'zh';

export const languageNames: Record<SupportedLanguage, string> = {
    en: 'English',
    zh: '中文',
};

export const defaultLanguage: SupportedLanguage = 'en';

/**
 * Translate text from English to Chinese using Gemini
 */
export async function translateToZh(text: string): Promise<string> {
    if (!text || text.trim() === '') return text;

    // Check cache first
    const cacheKey = `zh:${text}`;
    if (translationCache.has(cacheKey)) {
        return translationCache.get(cacheKey)!;
    }

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        const prompt = `Translate the following English text to Simplified Chinese. 
Only return the translated text, nothing else. Keep formatting like markdown intact.

Text to translate:
${text}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const translatedText = response.text().trim();

        // Cache the result
        translationCache.set(cacheKey, translatedText);

        return translatedText;
    } catch (error) {
        console.error('Translation error:', error);
        return text; // Fallback to original text
    }
}

/**
 * Translate an object's string properties
 */
export async function translateObject<T extends Record<string, any>>(
    obj: T,
    fieldsToTranslate: (keyof T)[]
): Promise<T> {
    const translated = { ...obj };

    for (const field of fieldsToTranslate) {
        if (typeof obj[field] === 'string') {
            translated[field] = await translateToZh(obj[field] as string) as T[keyof T];
        }
    }

    return translated;
}

/**
 * Static UI translations
 */
export const uiTranslations: Record<SupportedLanguage, Record<string, string>> = {
    en: {
        home: 'Home',
        about: 'About Me',
        blog: 'Blog',
        readMore: 'Read More',
        backToBlog: '← Back to Blog',
        shareArticle: 'Share this article:',
        copyLink: 'Copy Link',
        allPosts: 'All Posts',
        subscribe: 'Subscribe',
        enterEmail: 'Enter your email',
        stayUpdated: 'Stay Updated',
        newsletterDesc: 'Get the latest SEO insights delivered to your inbox. No spam, just valuable content.',
        heroTitle: 'Helping Businesses',
        heroTitleAccent: 'Dominate Search',
        heroTitleEnd: 'Results',
        heroDescription: 'I transform websites into traffic-generating machines through data-driven SEO strategies, technical optimization, and content that converts.',
        readInsights: 'Read My Insights',
        learnAboutMe: 'Learn About Me',
        projectsCompleted: 'Projects Completed',
        organicTraffic: 'Organic Traffic Generated',
        yearsExperience: 'Years Experience',
        whatIDo: 'What I Do',
        servicesDesc: 'Comprehensive SEO services tailored to your business goals',
        latestInsights: 'Latest Insights',
        insightsDesc: 'SEO strategies, case studies, and industry analysis',
        viewAllPosts: 'View All Posts →',
        readyToGrow: 'Ready to Grow Your Organic Traffic?',
        ctaDesc: "Let's discuss how data-driven SEO can transform your online presence.",
        getInTouch: 'Get in Touch',
        noPosts: 'No posts yet',
        noPostsDesc: 'Check back soon for SEO insights and case studies!',
        minRead: 'min read',
    },
    zh: {
        home: '首页',
        about: '关于我',
        blog: '博客',
        readMore: '阅读更多',
        backToBlog: '← 返回博客',
        shareArticle: '分享这篇文章：',
        copyLink: '复制链接',
        allPosts: '全部文章',
        subscribe: '订阅',
        enterEmail: '输入您的邮箱',
        stayUpdated: '保持更新',
        newsletterDesc: '获取最新的SEO见解，直接发送到您的收件箱。没有垃圾邮件，只有有价值的内容。',
        heroTitle: '帮助企业',
        heroTitleAccent: '主导搜索',
        heroTitleEnd: '结果',
        heroDescription: '我通过数据驱动的SEO策略、技术优化和转化内容，将网站转变为流量生成器。',
        readInsights: '阅读我的见解',
        learnAboutMe: '了解更多关于我',
        projectsCompleted: '完成的项目',
        organicTraffic: '产生的自然流量',
        yearsExperience: '年经验',
        whatIDo: '我的服务',
        servicesDesc: '根据您的业务目标量身定制的全面SEO服务',
        latestInsights: '最新见解',
        insightsDesc: 'SEO策略、案例研究和行业分析',
        viewAllPosts: '查看全部文章 →',
        readyToGrow: '准备好增加您的自然流量了吗？',
        ctaDesc: '让我们讨论数据驱动的SEO如何改变您的在线形象。',
        getInTouch: '联系我',
        noPosts: '暂无文章',
        noPostsDesc: '请稍后再来查看SEO见解和案例研究！',
        minRead: '分钟阅读',
    },
};

export function t(key: string, lang: SupportedLanguage): string {
    return uiTranslations[lang][key] || uiTranslations.en[key] || key;
}
