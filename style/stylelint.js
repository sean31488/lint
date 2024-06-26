module.exports = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss'
  ],
  rules: {
    'scss/at-import-partial-extension': null,
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }]
  }
}
