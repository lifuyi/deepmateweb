import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import { useHomepageTranslations } from '@site/src/hooks/useHomepageTranslations';
import styles from './styles.module.css';

type FeatureItem = {
  titleKey: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  descriptionKey: string;
};

const FeatureList: FeatureItem[] = [
  {
    titleKey: 'homepage.features.guide.title',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    descriptionKey: 'homepage.features.guide.desc',
  },
  {
    titleKey: 'homepage.features.database.title',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    descriptionKey: 'homepage.features.database.desc',
  },
  {
    titleKey: 'homepage.features.community.title',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    descriptionKey: 'homepage.features.community.desc',
  },
];

function Feature({titleKey, Svg, descriptionKey}: FeatureItem) {
  const t = useHomepageTranslations();
  
  // Map keys to their display text for the Docusaurus translation system
  const titleMessages: Record<string, { message: string; description: string }> = {
    'homepage.features.guide.title': {
      message: '📚 Comprehensive Guide',
      description: 'Homepage features section - guide title',
    },
    'homepage.features.database.title': {
      message: '🏫 University Database',
      description: 'Homepage features section - database title',
    },
    'homepage.features.community.title': {
      message: '🤝 Community Support',
      description: 'Homepage features section - community title',
    },
  };
  
  const descriptionMessages: Record<string, { message: string; description: string }> = {
    'homepage.features.guide.desc': {
      message: 'Complete step-by-step guidance for studying in China - from application to graduation. Everything you need in one place.',
      description: 'Homepage features section - guide description',
    },
    'homepage.features.database.desc': {
      message: 'Explore detailed information about China\'s top universities, programs, and campuses. Find the perfect fit for your academic goals.',
      description: 'Homepage features section - database description',
    },
    'homepage.features.community.desc': {
      message: 'Connect with fellow international students, get peer support, and share experiences. You\'re not alone in this journey!',
      description: 'Homepage features section - community description',
    },
  };
  
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{t(titleKey, titleMessages[titleKey])}</Heading>
        <p>{t(descriptionKey, descriptionMessages[descriptionKey])}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
