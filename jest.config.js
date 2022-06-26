const { resolve } = require("path");
const root = resolve(__dirname);
module.exports = {
  rootDir: root,
  displayName: "root-tests",
  testMatch: ["**/*.spec.ts"],
  testEnvironment: "node",
  clearMocks: true,
  preset: "ts-jest",
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@main/(.*)": "<rootDir>/src/main/$1",
    "@domain/(.*)": "<rootDir>/src/domain/$1",
    "@usecases/(.*)": "<rootDir>/src/usecases/$1",
    "@shared/(.*)": "<rootDir>/src/domain/shared/$1",
    "@test/(.*)": "<rootDir>/test/$1",
  },
};
