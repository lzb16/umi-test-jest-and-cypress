module.exports = {
  coveragePathIgnorePatterns: ['<rootDir>/src/.umi/', '<rootDir>/cypress/'],
  testPathIgnorePatterns: ['cypress'],
  coverageDirectory: 'jest-coverage',
  coverageReporters: ['clover', 'json', 'lcov'],
};
