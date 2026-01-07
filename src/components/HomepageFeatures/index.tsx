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
  
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{t(titleKey)}</Heading>
        <p>{t(descriptionKey)}</p>
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
