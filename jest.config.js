export default {
  collectCoverage: false,
  testMatch: ['**/challenges/**/*.test.js'],
  transform: {
    '.js': 'jest-esm-transformer',
  },
};
