/* eslint-disable */
const esModules = [
  'chai-a11y-axe',
  'lit',
  'lit-html',
  '@lit',
  '@open-wc',
  '@web',
  '@esm-bundle',
  'lucide'
].join('|');

export default {
  displayName: 'icons-web',
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
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
    './packages/icons-web/src/lib/icons/**/*.ts': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    '@keisha/design-system-tokens': '<rootDir>/../../dist/packages/tokens'
  },
  coveragePathIgnorePatterns: ['/node_modules/', './packages/icons-web/src/lib/icons/iconGallery/iconGallery.ts'],
  coverageReporters: ['clover', 'json', 'lcov', 'text'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/icons-web',
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`]
};
