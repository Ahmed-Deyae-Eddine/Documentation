import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Préparation des développeurs',
    Img: require('@site/static/img/contact.png').default,
    description: (
      <>
        La doc est une ressource pour aider les développeurs à se préparer aux
        entretiens et à améliorer leurs compétences techniques.
      </>
    ),
  },
  {
    title: 'Centralisation des connaissances',
    Img: require('@site/static/img/resource.png').default,
    description: (
      <>
        La doc regroupe toutes les informations et les meilleures pratiques,
        facilitant l'accès rapide aux ressources nécessaires.
      </>
    ),
  },
  {
    title: 'Évaluation des recrues',
    Img: require('@site/static/img/hiring.png').default,
    description: (
      <>
        Les recruteurs peuvent l'utiliser pour évaluer les compétences des
        candidats et des nouveaux membres de l'équipe.
      </>
    ),
  },
];

function Feature({ title, Img, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} alt={title} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
