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
  displayName: 'react',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\.[tj]sx?$': ['ts-jest', {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    }],
    '^.+\.mjs$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/react',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/lib/components/video-player/video-player.tsx',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`, 'packages/web-components/src/lib/components/.+.ts'],
  coverageReporters: ['clover', 'json', 'lcov', 'text'],
  moduleNameMapper: {
    'cleave.js': '<rootDir>/../../node_modules/cleave.js/dist/cleave-esm.js',
    '@keisha/design-system-icons-react': '<rootDir>/../../dist/packages/icons-react/cjs/index.js',
    '@keisha/design-system-icons-web': '<rootDir>/../../dist/packages/icons-web/cjs/index.js',
    '@keisha/design-system/utils/video-player/video-player-utils': '<rootDir>/../web-components/src/lib/components/video-player/video-player-utils-mock.ts',
    '@keisha/design-system': '<rootDir>/../../dist/packages/web-components/cjs/index.js',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)(\\?inline)?$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      branches: 38,
      functions: 45,
      lines: 67,
      statements: 67,
    },
  },
  // TODO: uncomment this later
  // coverageThreshold: {
  //   global: {
  //     branches: 90,
  //     functions: 90,
  //     lines: 90,
  //     statements: 90,
  //   },
  //   './packages/react/src/lib/components/video-player/video-player.tsx': {
  //     branches: 90,
  //     functions: 90,
  //     lines: 90,
  //     statements: 90,
  //   },
  // },
};
