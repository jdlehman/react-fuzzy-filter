module.exports = {
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  testMatch: ["<rootDir>/test/**/?(*.)test.ts?(x)"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
};
