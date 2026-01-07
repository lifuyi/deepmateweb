import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ImageCarousel from '@site/src/components/ImageCarousel';
import {
  FaPassport, FaHome, FaGraduationCap, FaHospital, FaMoneyBill,
  FaBus, FaLanguage, FaUtensils, FaUniversity, FaDollarSign,
  FaTheaterMasks, FaBriefcase, FaClipboardList, FaMobileAlt,
  FaComments, FaSuitcaseRolling, FaRocket
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
              Your Study Life Here in China Matters
            </Heading>
            <p className={styles.heroSubtitle}>
              Everything international students need to know about living, studying, and thriving in China.
              From visa applications to daily life tips, we've got you covered.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Start Your Journey <FaGraduationCap />
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
    { icon: <FaUniversity />, title: 'Contact University in China', desc: 'Get in touch with Chinese universities and manage your enrollment', link: '/docs/universities' },
    { icon: <FaBus />, title: 'Pick-up and drop-off Service', desc: 'Convenient transportation services for airport and campus transfers', link: '/docs/transportation' },
    { icon: <FaMobileAlt />, title: 'Chinese App Setup', desc: 'Essential apps guide to get you connected and prepared for life in China', link: '/docs/local-services' },
    { icon: <FaComments />, title: 'Local Life Guide', desc: 'Navigate daily life with tips on local customs, services, and neighborhoods', link: '/docs/local-services' },
    { icon: <FaHospital />, title: 'Accompanying to medical appointments', desc: 'Support and guidance for healthcare needs in China', link: '/docs/healthcare' },
    { icon: <FaBriefcase />, title: 'Career Planning', desc: 'Explore internship and career opportunities during and after your studies', link: '/docs/career' },
  ];

  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          What We Can Offer
        </Heading>
        <p className={styles.sectionSubtitle}>
          Comprehensive guides covering all aspects of student life in China
        </p>
        <div className="row">
          {categories.map((category, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <Link to={category.link} className={styles.categoryCard}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <Heading as="h3">{category.title}</Heading>
                <p>{category.desc}</p>
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
    { icon: <FaUniversity />, title: 'World-Class Education', desc: 'Study at internationally recognized universities with cutting-edge facilities and renowned professors' },
    { icon: <FaDollarSign />, title: 'Affordable Living', desc: 'Enjoy a high quality of life with reasonable tuition fees and living costs compared to Western countries' },
    { icon: <FaTheaterMasks />, title: 'Cultural Experience', desc: 'Immerse yourself in one of the world\'s oldest civilizations while experiencing modern innovation' },
    { icon: <FaBriefcase />, title: 'Career Opportunities', desc: 'Build valuable connections and gain experience in the world\'s second-largest economy' },
  ];

  return (
    <section className={styles.whySection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Why Study in China?
        </Heading>
        <p className={styles.sectionSubtitle}>
          Discover the opportunities and advantages of pursuing your education in China
        </p>
        <div className="row">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="col col--3 margin-bottom--lg">
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <Heading as="h3">{benefit.title}</Heading>
                <p>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection(): ReactNode {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className="row">
          <div className="col col--3 text--center">
            <div className={styles.statNumber}>500K+</div>
            <div className={styles.statLabel}>International Students</div>
          </div>
          <div className="col col--3 text--center">
            <div className={styles.statNumber}>3000+</div>
            <div className={styles.statLabel}>Universities</div>
          </div>
          <div className="col col--3 text--center">
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statLabel}>Countries Represented</div>
          </div>
          <div className="col col--3 text--center">
            <div className={styles.statNumber}>95%</div>
            <div className={styles.statLabel}>Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickStartGuides(): ReactNode {
  const guides = [
    { icon: <FaClipboardList />, title: 'First Week Checklist', desc: 'Essential tasks to complete when you arrive in China', link: '/docs/intro' },
    { icon: <FaMobileAlt />, title: 'Essential Apps', desc: 'Must-have mobile apps for daily life in China', link: '/docs/intro' },
    { icon: <FaComments />, title: 'Language Basics', desc: 'Key Chinese phrases every student should know', link: '/docs/intro' },
    { icon: <FaSuitcaseRolling />, title: 'Packing Guide', desc: 'What to bring and what to buy in China', link: '/docs/intro' },
  ];

  return (
    <section className={styles.quickStartSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Quick Start Guides
        </Heading>
        <p className={styles.sectionSubtitle}>
          Get up to speed quickly with our step-by-step guides
        </p>
        <div className="row">
          {guides.map((guide, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <Link to={guide.link} className={styles.guideCard}>
                <div className={styles.guideIcon}>{guide.icon}</div>
                <Heading as="h3">{guide.title}</Heading>
                <p>{guide.desc}</p>
                <span className={styles.readMore}>Read More →</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="text--center margin-top--lg">
          <Link to="/docs/intro" className="button button--primary button--lg">
            View All Guides 📚
          </Link>
        </div>
      </div>
    </section>
  );
}

function CtaSection(): ReactNode {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          Ready to Start Your Adventure?
        </Heading>
        <p className={styles.ctaSubtitle}>
          Join thousands of international students who have successfully made China their home.
          Get personalized guidance and support throughout your journey.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started Now 🚀
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
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
