// TypeScript types for translation namespaces

export interface CommonTranslations {
  nav: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
  };
  header: {
    intro: string;
    description: string;
    downloadCv: string;
    cardYears: string;
    cardProjects: string;
    cardCompanies: string;
  };
  notFound: {
    title: string;
    description: string;
    link: string;
  };
  lang: {
    en: string;
    es: string;
  };
}

export interface AboutTranslations {
  title: string;
  seeMore: string;
  modalTitle: string;
  shortDescription: string;
  detailedDescriptions: string[];
  statistics: {
    experience: {
      value: string;
      label: string;
    };
    projects: {
      value: string;
      label: string;
    };
  };
}

export interface ProjectTranslations {
  main: string;
  latest: string;
  seeMore: string;
  list: Record<
    string,
    {
      title: string;
      shortDescription: string;
      detailedDescription: string[];
    }
  >;
}

export interface ExperienceTranslations {
  title: string;
  techTitle: string;
  seeMore: string;
  list: Record<
    string,
    {
      period: string;
      company: string;
      summary: string;
      details: string[];
    }
  >;
}

export interface SkillsTranslations {
  title: string;
  names: Record<string, string>;
}

export interface ContactTranslations {
  title: string;
  subtitle: string;
  form: {
    email: {
      label: string;
      placeholder: string;
    };
    message: {
      label: string;
      placeholder: string;
    };
    send: string;
  };
  social: {
    title: string;
  };
}
