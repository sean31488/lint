module.exports = {
  extends: [
    '.eslintrc.js',
    './tailwind.js',
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  rules: {
    'vue/first-attribute-linebreak': ['error', { multiline: 'ignore' }],
    'vue/html-closing-bracket-newline': ['error', { multiline: 'never' }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: { max: 999 } }],
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off'
  }
}
