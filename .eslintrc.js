// https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: ['plugin:vue/essential', 'prettier', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'prettier/prettier': [
            'error',
            // https://prettier.io/docs/en/options.html
            {
                singleQuote: true,
                semi: true,
                useTabs: false,
                tabWidth: 4,
                trailingComma: 'all',
                printWidth: 100,
                bracketSpacing: true,
                arrowParens: 'avoid',
            },
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
        'no-unused-vars': 'off',
        'vue/no-use-v-if-with-v-for': [
            'error',
            {
                allowUsingIterationVar: true,
            },
        ],
    },
};
