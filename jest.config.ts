import type { Config } from "jest";
import { defaults } from "jest-config";

const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  verbose: true,
  // moduleNameMapper: {
  //   "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.ts",
  // },
  // modulePaths: ["<rootDir>"],
  // rootDir: './src',
  // setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  // setupFiles: ["<rootDir>/src/setupTests.ts"],
};

export default config;
