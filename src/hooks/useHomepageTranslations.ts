import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Translation dictionary for the homepage
 * This serves as a fallback for English when translations are not loaded yet
 */
const EN_TRANSLATIONS: Record<string, string> = {
  'homepage.hero.title': 'Your Study Life Here in China Matters',
  'homepage.hero.subtitle': 'Everything international students need to know about living, studying, and thriving in China. From visa applications to daily life tips, we\'ve got you covered.',
  'homepage.hero.button': 'Start Your Journey',
  'homepage.categories.title': 'What We Can Offer',
  'homepage.categories.subtitle': 'Comprehensive guides covering all aspects of student life in China',
  'homepage.category.university': 'Contact University in China',
  'homepage.category.university.desc': 'Get in touch with Chinese universities and manage your enrollment',
  'homepage.category.pickup': 'Pick-up and drop-off Service',
  'homepage.category.pickup.desc': 'Convenient transportation services for airport and campus transfers',
  'homepage.category.apps': 'Chinese App Setup',
  'homepage.category.apps.desc': 'Essential apps guide to get you connected and prepared for life in China',
  'homepage.category.locallife': 'Local Life Guide',
  'homepage.category.locallife.desc': 'Navigate daily life with tips on local customs, services, and neighborhoods',
  'homepage.category.healthcare': 'Accompanying to medical appointments',
  'homepage.category.healthcare.desc': 'Support and guidance for healthcare needs in China',
  'homepage.category.career': 'Career Planning',
  'homepage.category.career.desc': 'Explore internship and career opportunities during and after your studies',
  'homepage.why.title': 'Why Study in China?',
  'homepage.why.subtitle': 'Discover the opportunities and advantages of pursuing your education in China',
  'homepage.benefit.education': 'World-Class Education',
  'homepage.benefit.education.desc': 'Study at internationally recognized universities with cutting-edge facilities and renowned professors',
  'homepage.benefit.affordable': 'Affordable Living',
  'homepage.benefit.affordable.desc': 'Enjoy a high quality of life with reasonable tuition fees and living costs compared to Western countries',
  'homepage.benefit.culture': 'Cultural Experience',
  'homepage.benefit.culture.desc': 'Immerse yourself in one of the world\'s oldest civilizations while experiencing modern innovation',
  'homepage.benefit.career': 'Career Opportunities',
  'homepage.benefit.career.desc': 'Build valuable connections and gain experience in the world\'s second-largest economy',
  'homepage.stats.students': 'International Students',
  'homepage.stats.students.value': '500K+',
  'homepage.stats.universities': 'Universities',
  'homepage.stats.universities.value': '3000+',
  'homepage.stats.countries': 'Countries Represented',
  'homepage.stats.countries.value': '100+',
  'homepage.stats.satisfaction': 'Satisfaction Rate',
  'homepage.stats.satisfaction.value': '95%',
  'homepage.quickstart.title': 'Quick Start Guides',
  'homepage.quickstart.subtitle': 'Get up to speed quickly with our step-by-step guides',
  'homepage.quickstart.checklist': 'First Week Checklist',
  'homepage.quickstart.checklist.desc': 'Essential tasks to complete when you arrive in China',
  'homepage.quickstart.apps': 'Essential Apps',
  'homepage.quickstart.apps.desc': 'Must-have mobile apps for daily life in China',
  'homepage.quickstart.language': 'Language Basics',
  'homepage.quickstart.language.desc': 'Key Chinese phrases every student should know',
  'homepage.quickstart.packing': 'Packing Guide',
  'homepage.quickstart.packing.desc': 'What to bring and what to buy in China',
  'homepage.quickstart.viewall': 'View All Guides',
  'homepage.cta.title': 'Ready to Start Your Adventure?',
  'homepage.cta.subtitle': 'Join thousands of international students who have successfully made China their home. Get personalized guidance and support throughout your journey.',
  'homepage.cta.button': 'Get Started Now',
  'homepage.features.guide.title': '📚 Comprehensive Guide',
  'homepage.features.guide.desc': 'Complete step-by-step guidance for studying in China - from application to graduation. Everything you need in one place.',
  'homepage.features.database.title': '🏫 University Database',
  'homepage.features.database.desc': 'Explore detailed information about China\'s top universities, programs, and campuses. Find the perfect fit for your academic goals.',
  'homepage.features.community.title': '🤝 Community Support',
  'homepage.features.community.desc': 'Connect with fellow international students, get peer support, and share experiences. You\'re not alone in this journey!',
};

const ZH_HANS_TRANSLATIONS: Record<string, string> = {
  'homepage.hero.title': '你在中国的学生生活很重要',
  'homepage.hero.subtitle': '国际学生需要了解的关于在中国生活、学习和发展的一切。从签证申请到日常生活小贴士，我们为你提供全面帮助。',
  'homepage.hero.button': '开始你的旅程',
  'homepage.categories.title': '我们能提供什么',
  'homepage.categories.subtitle': '涵盖中国学生生活各个方面的综合指南',
  'homepage.category.university': '联系中国大学',
  'homepage.category.university.desc': '与中国大学联系并管理你的招生事宜',
  'homepage.category.pickup': '接送服务',
  'homepage.category.pickup.desc': '便捷的交通运输服务，用于机场和校园接送',
  'homepage.category.apps': '中国应用程序设置',
  'homepage.category.apps.desc': '必要的应用程序指南，帮助你为在中国生活做好准备',
  'homepage.category.locallife': '本地生活指南',
  'homepage.category.locallife.desc': '日常生活导航，提供关于当地习俗、服务和街区的贴士',
  'homepage.category.healthcare': '陪同医疗预约',
  'homepage.category.healthcare.desc': '中国医疗保健需求的支持和指导',
  'homepage.category.career': '职业规划',
  'homepage.category.career.desc': '探索学习期间及毕业后的实习和职业机会',
  'homepage.why.title': '为什么在中国学习？',
  'homepage.why.subtitle': '发现在中国追求教育的机会和优势',
  'homepage.benefit.education': '世界一流教育',
  'homepage.benefit.education.desc': '在国际认可的大学就读，享受最先进的设施和杰出教授',
  'homepage.benefit.affordable': '经济实惠的生活',
  'homepage.benefit.affordable.desc': '享受高质量生活，学费和生活成本与西方国家相比合理',
  'homepage.benefit.culture': '文化体验',
  'homepage.benefit.culture.desc': '沉浸在世界最古老的文明之一中，同时体验现代创新',
  'homepage.benefit.career': '职业机会',
  'homepage.benefit.career.desc': '建立宝贵的人脉关系，在世界第二大经济体中获得经验',
  'homepage.stats.students': '国际学生',
  'homepage.stats.students.value': '50万+',
  'homepage.stats.universities': '大学',
  'homepage.stats.universities.value': '3000+',
  'homepage.stats.countries': '代表国家数',
  'homepage.stats.countries.value': '100+',
  'homepage.stats.satisfaction': '满意度',
  'homepage.stats.satisfaction.value': '95%',
  'homepage.quickstart.title': '快速入门指南',
  'homepage.quickstart.subtitle': '通过我们的分步指南快速上手',
  'homepage.quickstart.checklist': '第一周清单',
  'homepage.quickstart.checklist.desc': '抵达中国时需要完成的基本任务',
  'homepage.quickstart.apps': '必需应用程序',
  'homepage.quickstart.apps.desc': '中国日常生活必须的移动应用程序',
  'homepage.quickstart.language': '语言基础',
  'homepage.quickstart.language.desc': '每个学生都应该知道的关键中文短语',
  'homepage.quickstart.packing': '行李打包指南',
  'homepage.quickstart.packing.desc': '要带什么以及在中国可以购买什么',
  'homepage.quickstart.viewall': '查看所有指南',
  'homepage.cta.title': '准备好开始你的冒险了吗？',
  'homepage.cta.subtitle': '加入数千名已成功将中国视为家园的国际学生。在你的整个旅程中获得个性化的指导和支持。',
  'homepage.cta.button': '现在开始',
  'homepage.features.guide.title': '📚 综合指南',
  'homepage.features.guide.desc': '从申请到毕业，完整的分步指导。你需要的一切都在这里。',
  'homepage.features.database.title': '🏫 大学数据库',
  'homepage.features.database.desc': '探索关于中国顶尖大学、课程和校园的详细信息。找到适合你学术目标的完美选择。',
  'homepage.features.community.title': '🤝 社区支持',
  'homepage.features.community.desc': '与其他国际学生联系，获得同伴支持并分享经验。你在这个旅程中并不孤单！',
};

/**
 * Hook to get translated homepage text
 * Returns English as fallback, with support for Chinese
 */
export function useHomepageTranslations(): (key: string) => string {
  const { i18n } = useDocusaurusContext();
  
  // Get current locale from Docusaurus context
  const currentLocale = i18n.currentLocale;
  const isChineseLocale = currentLocale === 'zh-Hans';
  const translations = isChineseLocale ? ZH_HANS_TRANSLATIONS : EN_TRANSLATIONS;

  return (key: string): string => {
    return translations[key] || key;
  };
}

/**
 * Direct translation function (useful outside of components)
 */
export function getHomepageTranslation(key: string, locale: 'en' | 'zh-Hans' = 'en'): string {
  const translations = locale === 'zh-Hans' ? ZH_HANS_TRANSLATIONS : EN_TRANSLATIONS;
  return translations[key] || key;
}
