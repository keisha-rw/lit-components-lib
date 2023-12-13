/* eslint-disable */
const esModules = [
  'chai-a11y-axe',
  'cleave.js',
  'lit',
  'lit-html',
  '@lit',
  '@open-wc',
  '@web',
  '@esm-bundle',
  'storybook-mock-date-decorator',
].join('|');

export default {
  displayName: 'web-components',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    }],
    '^.+\\.mjs$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/lib/**/*.ts',
    '!<rootDir>/src/lib/**/*.d.ts',
    '!<rootDir>/src/lib/**/*.spec.ts',
    '!<rootDir>/src/lib/**/*.stories.ts',
    '!<rootDir>/src/lib/components/video-player/video-player-utils.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
    './packages/web-components/src/lib/components/**/*.ts': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    'cleave.js': '<rootDir>/../../node_modules/cleave.js/dist/cleave-esm.js',
    '@keisha/design-system-icons-web': '<rootDir>/../../dist/packages/icons-web',
    './video-player-utils': '<rootDir>/src/lib/components/video-player/video-player-utils-mock.ts',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)(\\?inline)?$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['clover', 'json', 'lcov', 'text'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'json'],
  coverageDirectory: '../../coverage/packages/web-components',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
