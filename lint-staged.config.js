module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => ['yarn type-check', 'yarn lint:css'],
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': filenames => [
    `yarn lint --fix . ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],
}
