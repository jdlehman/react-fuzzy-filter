module.exports = {
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  setupFiles: ["<rootDir>/test/setup.ts"],
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  testMatch: ["<rootDir>/test/**/?(*.)test.ts?(x)"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
};
