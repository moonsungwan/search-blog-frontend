module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '.*\\.(vue)$': 'vue-jest',
        '.*\\.(js)$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: ['**/__tests__/**/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
    testEnvironmentOptions: {
        // only string values is supported??
        beforeParse(window) {
            console.log('------------------------------------------  log ');
            window.document.childNodes.length === 0;
            window.alert = msg => {
                console.log(msg);
            };
            window.matchMedia = () => ({});
            window.scrollTo = () => {};
        },
    },
};
