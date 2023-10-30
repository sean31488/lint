// standard的規則應用在template
const { rules: standardRules } = require('eslint-config-standard')
const { rules: vueRules } = require('eslint-plugin-vue')
const vueTemplateStandardRules = {}
Object.keys(standardRules).forEach(key => {
  if (vueRules[key] && standardRules[key] && key !== 'no-unused-vars') {
    vueTemplateStandardRules[`vue/${key}`] = standardRules[key]
  }
})

module.exports = {
  rules: {
    ...vueTemplateStandardRules,
    'vue/first-attribute-linebreak': ['error', { multiline: 'ignore' }],
    'vue/html-closing-bracket-newline': ['error', { multiline: 'never' }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: { max: 999 } }],
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off'
  }
}
