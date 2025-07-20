const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.tsx'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@/hook/(.*)$': '<rootDir>/src/hook/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/providers/(.*)$': '<rootDir>/src/providers/$1',
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',
    '^swiper\/css$': '<rootDir>/src/lib/test/__mocks__/fileMock.ts',
    '^swiper\/css/.*$': '<rootDir>/src/lib/test/__mocks__/fileMock.ts',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/lib/test/__mocks__/fileMock.ts',
  },
}

module.exports = createJestConfig(customJestConfig)
