import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['dotenv/config'],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testRegex: 'src/.*\\.spec\\.(ts|tsx)$',
}

export default config
