module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testMatch: ['**/src/**/*.tests.(ts|js)?(x)'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'html'],
}
