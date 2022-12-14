module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: ['standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'max-len': 'off',
    'import/no-unresolved': ['error', { ignore: ['\\@'] }],
    'import/extensions': 'off'
  }
}
