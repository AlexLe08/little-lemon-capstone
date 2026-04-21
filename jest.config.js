module.exports = {
  testEnvironment: "jsdom", // Simulates browser environment for React tests
  moduleDirectories: ["node_modules", "src"], // Allows importing modules from these folders
  moduleFileExtensions: ["js", "jsx", "json", "node"], // Recognize these file types
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Use babel-jest to transform JS and JSX files
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Adds custom jest matchers for testing-library
  setupFiles: ["<rootDir>/src/setupTests.js"], // Runs setupTests.js before each test file
};