import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';
import ImageCarousel from '@site/src/components/ImageCarousel';
import { useHomepageTranslations } from '@site/src/hooks/useHomepageTranslations';
import {
  FaGraduationCap, FaHospital, FaBus, FaUniversity, FaDollarSign,
  FaTheaterMasks, FaBriefcase, FaClipboardList, FaMobileAlt,
  FaComments, FaSuitcaseRolling
} from 'react-icons/fa';

import styles from './index.module.css';

const carouselSlides = [
  {
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop',
    alt: 'Chinese university campus'
  },
  {
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=600&fit=crop',
    alt: 'University library'
  },
  {
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=600&fit=crop',
    alt: 'University students'
  },
  {
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop',
    alt: 'International students'
  }
];

function HomepageHeader() {
  return (
    <header className={styles.heroSection}>
      <ImageCarousel slides={carouselSlides} autoPlay={true} interval={6000} />
      <div className={styles.heroContent}>
        <div className="container">
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              <Translate id="homepage.hero.title">Your Study Life Here in China Matters</Translate>
            </Heading>
            <p className={styles.heroSubtitle}>
              <Translate id="homepage.hero.subtitle">
                Everything international students need to know about living, studying, and thriving in China.
                From visa applications to daily life tips, we've got you covered.
              </Translate>
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                <Translate id="homepage.hero.button">Start Your Journey</Translate> <FaGraduationCap />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function CategoriesSection(): ReactNode {
  const categories = [
    { icon: <FaUniversity />, titleId: 'homepage.category.university', descId: 'homepage.category.university.desc', titleDefault: 'Contact University in China', descDefault: 'Get in touch with Chinese universities and manage your enrollment', link: '/docs/universities' },
    { icon: <FaBus />, titleId: 'homepage.category.pickup', descId: 'homepage.category.pickup.desc', titleDefault: 'Pick-up and drop-off Service', descDefault: 'Convenient transportation services for airport and campus transfers', link: '/docs/transportation' },
    { icon: <FaMobileAlt />, titleId: 'homepage.category.apps', descId: 'homepage.category.apps.desc', titleDefault: 'Chinese App Setup', descDefault: 'Essential apps guide to get you connected and prepared for life in China', link: '/docs/local-services' },
    { icon: <FaComments />, titleId: 'homepage.category.locallife', descId: 'homepage.category.locallife.desc', titleDefault: 'Local Life Guide', descDefault: 'Navigate daily life with tips on local customs, services, and neighborhoods', link: '/docs/local-services' },
    { icon: <FaHospital />, titleId: 'homepage.category.healthcare', descId: 'homepage.category.healthcare.desc', titleDefault: 'Accompanying to medical appointments', descDefault: 'Support and guidance for healthcare needs in China', link: '/docs/healthcare' },
    { icon: <FaBriefcase />, titleId: 'homepage.category.career', descId: 'homepage.category.career.desc', titleDefault: 'Career Planning', descDefault: 'Explore internship and career opportunities during and after your studies', link: '/docs/career' },
  ];

  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="homepage.categories.title">What We Can Offer</Translate>
        </Heading>
        <p className={styles.sectionSubtitle}>
          <Translate id="homepage.categories.subtitle">Comprehensive guides covering all aspects of student life in China</Translate>
        </p>
        <div className="row">
          {categories.map((category, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <Link to={category.link} className={styles.categoryCard}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <Heading as="h3">{translate({ id: category.titleId, message: category.titleDefault })}</Heading>
                <p>{translate({ id: category.descId, message: category.descDefault })}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStudyInChina(): ReactNode {
  const benefits = [
    { icon: <FaUniversity />, titleId: 'homepage.benefit.education', descId: 'homepage.benefit.education.desc', titleDefault: 'World-Class Education', descDefault: 'Study at internationally recognized universities with cutting-edge facilities and renowned professors' },
    { icon: <FaDollarSign />, titleId: 'homepage.benefit.affordable', descId: 'homepage.benefit.affordable.desc', titleDefault: 'Affordable Living', descDefault: 'Enjoy a high quality of life with reasonable tuition fees and living costs compared to Western countries' },
    { icon: <FaTheaterMasks />, titleId: 'homepage.benefit.culture', descId: 'homepage.benefit.culture.desc', titleDefault: 'Cultural Experience', descDefault: 'Immerse yourself in one of the world\'s oldest civilizations while experiencing modern innovation' },
    { icon: <FaBriefcase />, titleId: 'homepage.benefit.career', descId: 'homepage.benefit.career.desc', titleDefault: 'Career Opportunities', descDefault: 'Build valuable connections and gain experience in the world\'s second-largest economy' },
  ];

  return (
    <section className={styles.whySection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="homepage.why.title">Why Study in China?</Translate>
        </Heading>
        <p className={styles.sectionSubtitle}>
          <Translate id="homepage.why.subtitle">Discover the opportunities and advantages of pursuing your education in China</Translate>
        </p>
        <div className="row">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="col col--3 margin-bottom--lg">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <Heading as="h3">{translate({ id: benefit.titleId, message: benefit.titleDefault })}</Heading>
                <p>{translate({ id: benefit.descId, message: benefit.descDefault })}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection(): ReactNode {
  const stats = [
    { valueId: 'homepage.stats.students.value', labelId: 'homepage.stats.students', valueDefault: '500K+', labelDefault: 'International Students' },
    { valueId: 'homepage.stats.universities.value', labelId: 'homepage.stats.universities', valueDefault: '3000+', labelDefault: 'Universities' },
    { valueId: 'homepage.stats.countries.value', labelId: 'homepage.stats.countries', valueDefault: '100+', labelDefault: 'Countries Represented' },
    { valueId: 'homepage.stats.satisfaction.value', labelId: 'homepage.stats.satisfaction', valueDefault: '95%', labelDefault: 'Satisfaction Rate' },
  ];
  
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className="row">
          {stats.map((stat, idx) => (
            <div key={idx} className="col col--3 text--center">
              <div className={styles.statNumber}>{translate({ id: stat.valueId, message: stat.valueDefault })}</div>
              <div className={styles.statLabel}>{translate({ id: stat.labelId, message: stat.labelDefault })}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartGuides(): ReactNode {
  const t = useHomepageTranslations();
  
  const guides = [
    { icon: <FaClipboardList />, titleKey: 'homepage.quickstart.checklist', descKey: 'homepage.quickstart.checklist.desc', link: '/docs/intro' },
    { icon: <FaMobileAlt />, titleKey: 'homepage.quickstart.apps', descKey: 'homepage.quickstart.apps.desc', link: '/docs/intro' },
    { icon: <FaComments />, titleKey: 'homepage.quickstart.language', descKey: 'homepage.quickstart.language.desc', link: '/docs/intro' },
    { icon: <FaSuitcaseRolling />, titleKey: 'homepage.quickstart.packing', descKey: 'homepage.quickstart.packing.desc', link: '/docs/intro' },
  ];

  return (
    <section className={styles.quickStartSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {t('homepage.quickstart.title')}
        </Heading>
        <p className={styles.sectionSubtitle}>
          {t('homepage.quickstart.subtitle')}
        </p>
        <div className="row">
          {guides.map((guide, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <Link to={guide.link} className={styles.guideCard}>
                <div className={styles.guideIcon}>{guide.icon}</div>
                <Heading as="h3">{t(guide.titleKey)}</Heading>
                <p>{t(guide.descKey)}</p>
                <span className={styles.readMore}>Read More →</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="text--center margin-top--lg">
          <Link to="/docs/intro" className="button button--primary button--lg">
            {t('homepage.quickstart.viewall')} 📚
          </Link>
        </div>
      </div>
    </section>
  );
}

function CtaSection(): ReactNode {
  const t = useHomepageTranslations();
  
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          {t('homepage.cta.title')}
        </Heading>
        <p className={styles.ctaSubtitle}>
          {t('homepage.cta.subtitle')}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            {t('homepage.cta.button')} 🚀
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Your Journey to Study in China Starts Here`}
      description="Everything international students need to know about living, studying, and thriving in China">
      <HomepageHeader />
      <main>
        <CategoriesSection />
        <WhyStudyInChina />
        <StatsSection />
        <QuickStartGuides />
        <CtaSection />
      </main>
    </Layout>
  );
}
