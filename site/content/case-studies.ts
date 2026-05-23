export type CaseStudySection = {
  heading: { fr: string; en: string };
  body: { fr: string; en: string };
};

export type CaseStudy = {
  slug: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "pipeline-cloud-bnp",
    sections: [
      {
        heading: { fr: "Contexte", en: "Context" },
        body: {
          fr: "Au sein de BNP Paribas Cardif, j'interviens sur la modernisation des flux de données métier vers une architecture cloud (Azure et AWS). L'objectif : remplacer des traitements batch on-prem vieillissants par des pipelines distribués scalables et observables.",
          en: "At BNP Paribas Cardif I work on modernizing business data flows toward a cloud architecture (Azure and AWS). The goal: replace aging on-prem batch jobs with scalable, observable, distributed pipelines.",
        },
      },
      {
        heading: { fr: "Problème", en: "Problem" },
        body: {
          fr: "Les flux historiques tournent en local, sans monitoring fin, avec un coût de maintenance élevé et des incidents fréquents. La migration nécessite un design qui garantit la scalabilité, la sécurité et la traçabilité de chaque transformation.",
          en: "Legacy flows run locally, with limited monitoring, high maintenance cost, and frequent incidents. Migration requires a design that guarantees scalability, security, and lineage on every transformation.",
        },
      },
      {
        heading: { fr: "Approche", en: "Approach" },
        body: {
          fr: "Pipelines PySpark conteneurisés et déployés via CI/CD GitHub Actions, orchestration cloud-native, gouvernance via DataGalaxy pour la documentation et le lineage, monitoring centralisé. Tests unitaires sur les transformations et tests d'intégration sur les sinks.",
          en: "Containerized PySpark pipelines deployed via GitHub Actions CI/CD, cloud-native orchestration, DataGalaxy governance for documentation and lineage, centralized monitoring. Unit tests on transformations and integration tests on sinks.",
        },
      },
      {
        heading: { fr: "Stack", en: "Stack" },
        body: {
          fr: "Python · PySpark · Azure (Data Factory, ADLS, Synapse) · AWS (S3, Glue) · SQL · GitHub Actions · DataGalaxy.",
          en: "Python · PySpark · Azure (Data Factory, ADLS, Synapse) · AWS (S3, Glue) · SQL · GitHub Actions · DataGalaxy.",
        },
      },
      {
        heading: { fr: "Résultats", en: "Results" },
        body: {
          fr: "Pipelines fiabilisés, temps de traitement réduits, documentation systématique des flux, déploiements automatisés sans intervention manuelle, équipes métier autonomes sur la consommation des datasets.",
          en: "Stabilized pipelines, reduced processing times, systematic flow documentation, fully automated deployments, business teams autonomous on dataset consumption.",
        },
      },
    ],
  },
  {
    slug: "dashboards-sncf",
    sections: [
      {
        heading: { fr: "Contexte", en: "Context" },
        body: {
          fr: "Mission d'un an chez SNCF Voyageurs en tant que Data Analyst, focalisée sur le suivi de la performance opérationnelle et l'industrialisation du reporting.",
          en: "One-year mission at SNCF Voyageurs as a Data Analyst, focused on operational performance monitoring and reporting industrialization.",
        },
      },
      {
        heading: { fr: "Problème", en: "Problem" },
        body: {
          fr: "Reporting manuel chronophage, indicateurs hétérogènes entre équipes, données sources fragmentées. Besoin de fiabiliser et d'automatiser pour libérer du temps aux équipes métier.",
          en: "Time-consuming manual reporting, inconsistent KPIs across teams, fragmented source data. Need to stabilize and automate to free up business teams' time.",
        },
      },
      {
        heading: { fr: "Approche", en: "Approach" },
        body: {
          fr: "Pipelines ETL SQL + Python en amont pour consolider et nettoyer les sources, modélisation en étoile, dashboards Power BI interactifs avec refresh planifié. Méthodologie data storytelling pour rendre les KPI directement actionnables.",
          en: "SQL + Python ETL pipelines upstream to consolidate and clean sources, star schema modeling, interactive Power BI dashboards with scheduled refresh. Data storytelling methodology to make KPIs directly actionable.",
        },
      },
      {
        heading: { fr: "Résultats", en: "Results" },
        body: {
          fr: "Reporting automatisé, gains de temps significatifs pour les équipes métier, alignement des indicateurs au niveau direction.",
          en: "Automated reporting, significant time savings for business teams, KPI alignment at leadership level.",
        },
      },
    ],
  },
  {
    slug: "moteur-recherche-opensearch",
    sections: [
      {
        heading: { fr: "Contexte", en: "Context" },
        body: {
          fr: "Mission chez Matheles IT Consulting : doter un client d'un moteur de recherche performant sur sa base documentaire.",
          en: "Mission at Matheles IT Consulting: equip a client with a high-performance search engine over their document base.",
        },
      },
      {
        heading: { fr: "Problème", en: "Problem" },
        body: {
          fr: "Volume documentaire important, recherche full-text inexistante, besoin d'une UI fluide avec filtres et facettes.",
          en: "Large document volume, no full-text search, need for a fluid UI with filters and facets.",
        },
      },
      {
        heading: { fr: "Approche", en: "Approach" },
        body: {
          fr: "Indexation OpenSearch (mapping custom, analyzers FR), API de requêtage typée, front en ReactiveSearch pour livrer rapidement une UI avec barre de recherche, facettes, pagination et highlighting.",
          en: "OpenSearch indexing (custom mapping, FR analyzers), typed query API, ReactiveSearch front-end for fast delivery of UI with search bar, facets, pagination, and highlighting.",
        },
      },
      {
        heading: { fr: "Stack", en: "Stack" },
        body: {
          fr: "OpenSearch · ReactiveSearch · React · Elasticsearch DSL.",
          en: "OpenSearch · ReactiveSearch · React · Elasticsearch DSL.",
        },
      },
      {
        heading: { fr: "Résultats", en: "Results" },
        body: {
          fr: "Recherche sous la seconde sur l'ensemble du corpus, UI livrée en quelques semaines, montée en compétences forte sur la stack search.",
          en: "Sub-second search across the corpus, UI delivered in weeks, strong upskilling on search stack.",
        },
      },
    ],
  },
];
