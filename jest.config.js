module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: [
    "js",
    "jsx"
  ],
  roots: [
    "src"
  ],
  moduleDirectories: [
    "node_modules",
    "utilities",
    __dirname
  ],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  setupFilesAfterEnv: []
}