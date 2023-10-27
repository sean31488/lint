module.exports = {
  extends: ['standard'],
  rules: {
    'max-len': 'off',
    'import/no-unresolved': ['error', { ignore: ['\\@'] }],
    'import/extensions': 'off'
  }
}
