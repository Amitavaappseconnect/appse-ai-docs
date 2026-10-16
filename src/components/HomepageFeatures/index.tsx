import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  img?: string; // Optional for image path
  description: ReactNode;
  href?: string; // Optional: renders an "Explore" button under the description
};

const FeatureList: FeatureItem[] = [
  {
    title: "Explore the Platform",
    img: "/img/homepage/explore-the-platform.png",
    href: "/platform/what-is-appse-ai",
    description: (
      <>
        Browse key features like credential management, processflows, execution
        history, and AI agents, everything built to simplify integration.
      </>
    ),
  },
  {
    title: "Integrate Applications",
    img: "/img/homepage/integrate-applications.png",
    href: "/app-integrations",
    description: (
      <>
        Connect your favorite apps in minutes. Sync data effortlessly across
        platforms with zero-code integrations and enterprise-grade reliability.
      </>
    ),
  },
  {
  title: "Start Your Automation Journey",
    img: "/img/homepage/start-your-automation-journey.png",
  description: (
    <>
      Turn manual tasks into smart, automated workflows. Launch faster, scale
      smarter — Your journey to operational efficiency starts here. 
    </>
  ),
},
];

function Feature({ title, Svg, img, description, href }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className="text--center">
          {img ? (
            <img
              src={img}
              alt={title}
              width={120}
              height={120}
              className={styles.featureSvg}
              style={{ display: "block", margin: "0 auto 1rem" }}
            />
          ) : Svg ? (
            <Svg className={styles.featureSvg} role="img" />
          ) : null}
        </div>
        <div className={clsx("text--center padding-horiz--md", styles.featureBody)}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
        {href && (
          <div className={styles.featureAction}>
            <a className="button button--primary" href={href}>
              Explore
            </a>
          </div>
        )}
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
