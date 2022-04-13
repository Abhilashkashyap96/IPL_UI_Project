module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": ["@typescript-eslint/parser", "babel-eslint"],
    "plugins": ["@typescript-eslint", "prettier"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "wx": "readonly",
        "getCurrentPages": "readonly",
        "getApp": "readonly",
        "Page": "readonly",
        "Component": "readonly",
        "App": "readonly"
    },
    "root": true,
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        },
        "rules": {
            "prettier/prettier": "error",
            "@typescript-eslint/member-delimiter-style": "off",
            "@typescript-eslint/interface-name-prefix": ["warn", "always"],
            "@typescript-eslint/explicit-function-return-type": ["error", {
                "allowExpressions": true,
                "allowTypedFunctionExpressions": true,
                "allowHigherOrderFunctions": true
            }],
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/indent": ["error", 2],
            "typescript": "^4.2.2",
            "@typescript-eslint/eslint-plugin": "^4.16.1",
            "@typescript-eslint/parser": "^4.16.1",
            "eslint": "^7.21.0",
            "prettier": "^2.2.1",
            "prettier-eslint": "^12.0.0"
        }
    }
};