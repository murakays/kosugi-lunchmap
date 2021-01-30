module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'google',
        'eslint:recommended',
        'plugin:react/recommended', // https://www.npmjs.com/package/eslint-plugin-react
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'prettier',
    ],
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
        sourceType: 'module', // Allows for the use of imports
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    rules: {
        'require-jsdoc' : 0,
        'no-console' : ["error", { allow: ["warn", "error"] }]
    }
    // 参考：https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
};