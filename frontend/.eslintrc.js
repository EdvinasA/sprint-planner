module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "arrow-parens": "off",
    "comma-dangle": "off",
    "no-use-before-define": "off",
    "operator-linebreak": "off",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "linebreak-style": "off",
    "react/jsx-props-no-spreading": "off",
    quotes: "off",
    "object-curly-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "max-len": "off",
    "no-unused-vars": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": "off",
    "no-shadow": "off",
    "no-continue": "off",
    "prefer-template": "off",
    "spaced-comment": "off",
    "react/no-array-index-key": "off",
    "react/jsx-indent": "off",
    "no-param-reassign": "off",
    "no-case-declarations": "off",
    "import/prefer-default-export": "off",
    "no-multi-assign": "off",
    "consistent-return": "off",
    "react/no-unescaped-entities": "off",
    "arrow-body-style": "off",
    "prefer-destructuring": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off"
  },
  "overrides": [
    {
      "files": [
        "**/*.test.js",
        "**/*.test.jsx"
      ],
      "env": {
        "jest": true
      }
    }
  ]
};
