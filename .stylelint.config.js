module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  plugins: ['stylelint-scss'],
  // https://stylelint.io/user-guide/configuration
  ignoreFiles: [
    'src/**/*.vue',
    // 'src/**/*.scss',
    'src/plugins/*/*.css',
    'src/plugins/*/*/*.css',
  ],
  // customSyntax: 'postcss-scss',
  lintOnStart: false,
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
  },
}
