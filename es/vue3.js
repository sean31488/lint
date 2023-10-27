const { rules: vueCommonRules } = require('./vue-common.js')

// 這rule不知為啥要extends和在rules設置才有作用
module.exports = {
  extends: ['./vue-common.js', 'plugin:vue/vue3-recommended'],
  rules: {
    ...vueCommonRules
  }
}
