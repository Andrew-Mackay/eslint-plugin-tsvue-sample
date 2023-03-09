module.exports = {
  root: true,

  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: [
      '.vue'
    ]
  },

  plugins: [
    'vue',
    'tsvue'
  ],

  extends: [
    'plugin:vue/essential'
  ],

  overrides: [
    {
      files: [
        '*.tsvue'
      ],

      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        extraFileExtensions: [
          '.tsvue'
        ]
      },

      plugins: [
        'vue',
        '@typescript-eslint'
      ],

      extends: [
        'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ]
    }
  ]
}
