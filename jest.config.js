/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'js-dom',
  moduleNameMapper: {
    '^~lib/(.*)$': '<rootDir>/lib/$1',
  },
  setupFiles: ['dotenv/config'],
}
