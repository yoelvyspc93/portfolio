const COMPONENTS_BASE_PATH = 'src/components/';
const componentIdentifiers = [
  'common/AboutModal',
  'common/CircleButton',
  'common/HeaderCard',
  'common/ProjectsCard',
];
const mutateTargets = componentIdentifiers.map(
  (identifier) => `${COMPONENTS_BASE_PATH}${identifier}/index.+(ts|tsx)`,
);

/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'jest',
  jest: {
    projectType: 'custom',
    configFile: 'jest.config.js',
  },
  coverageAnalysis: 'perTest',
  mutate: [
    ...mutateTargets,
    '!src/**/*.test.+(ts|tsx)',
    '!src/**/*.test.to.+(ts|tsx)',
    '!src/**/*.fixture.+(ts|tsx)',
  ],
  incremental: true,
  thresholds: {
    high: 80,
    low: 60,
    break: 50,
  },
};
