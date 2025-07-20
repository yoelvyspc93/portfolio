export const featureFlags = {
  showHeader: process.env.NEXT_PUBLIC_FEATURE_HEADER !== '0',
  showAbout: process.env.NEXT_PUBLIC_FEATURE_ABOUT !== '0',
  showProjects: process.env.NEXT_PUBLIC_FEATURE_PROJECTS !== '0',
  showExperience: process.env.NEXT_PUBLIC_FEATURE_EXPERIENCE !== '0',
  showSkills: process.env.NEXT_PUBLIC_FEATURE_SKILLS !== '0',
  showContact: process.env.NEXT_PUBLIC_FEATURE_CONTACT !== '0',
  showLanguage: process.env.NEXT_PUBLIC_FEATURE_LANGUAGE !== '0',
};
export type FeatureFlags = typeof featureFlags;
