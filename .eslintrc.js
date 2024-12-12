// module.exports = {
//   extends: 'erb',
//   plugins: ['@typescript-eslint'],
//   rules: {
//     // A temporary hack related to IDE not resolving correct package.json
//     'import/no-extraneous-dependencies': 'off',
//     'react/react-in-jsx-scope': 'off',
//     'react/jsx-filename-extension': 'off',
//     'import/extensions': 'off',
//     'import/no-unresolved': 'off',
//     'import/no-import-module-exports': 'off',
//     'no-shadow': 'off',
//     '@typescript-eslint/no-shadow': 'error',
//     'no-unused-vars': 'off',
//     '@typescript-eslint/no-unused-vars': 'error',
//   },
//   parserOptions: {
//     ecmaVersion: 2022,
//     sourceType: 'module',
//   },
//   settings: {
//     'import/resolver': {
//       // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
//       node: {
//         extensions: ['.js', '.jsx', '.ts', '.tsx'],
//         moduleDirectory: ['node_modules', 'src/'],
//       },
//       webpack: {
//         config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
//       },
//       typescript: {},
//     },
//     'import/parsers': {
//       '@typescript-eslint/parser': ['.ts', '.tsx'],
//     },
//   },
// };

module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    jest: true,
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'react-hooks',
    '@tanstack/query',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    // "airbnb"
    // "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['dist/', 'node_modules/'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'import/extensions': ['.ts', '.tsx'],
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent', 'index'],
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroupsExcludedImportTypes: ['react', 'unknown'],
        'newlines-between': 'always',
      },
    ],
    semi: 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-unused-vars': 'warn',
    'no-empty-function': 'warn',
    'import/no-named-as-default': 'off',
    'no-case-declarations': 'off',
    'prefer-const': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-empty-pattern': 'off',
    '@tanstack/query/exhaustive-deps': 'warn',
    '@tanstack/query/prefer-query-object-syntax': 'error',
    'react/jsx-no-comment-textnodes': 'off',
    'import/no-named-as-default-member': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-empty': 'off',
    'react-hooks/exhaustive-deps': [
      'off',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
    '@typescript-eslint/no-empty-function': ['warn'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/triple-slash-reference': ['off'],
    'lines-around-directive': ['off'],
    'newline-before-return': ['off'],
    'no-use-before-define': ['off'],
    'no-useless-constructor': ['off'],
    'no-prototype-builtins': ['off'],
    'react/no-unescaped-entities': ['off'],
    'import/named': ['off'],
    'no-inferrable-types': [true], //true: can't check import eslint order rule
    // "no-inferrable-types": [true, "ignore-params", "ignore-properties"],
    // "padding-line-between-statements": [
    //   "error",
    //   { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
    //   { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] }
    // ],
    'no-useless-rename': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'dot-notation': ['error', { allowKeywords: true }],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: true },
    ],
    'no-sync': ['off'],
    complexity: ['off'],
    'max-nested-callbacks': ['error', 4],
    'no-cond-assign': ['off'],
    // "max-depth": ["error", 4],
    'no-return-assign': ['off'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
