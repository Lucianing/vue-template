module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:vue/essential'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'array-bracket-spacing': [2, 'never'],
    'space-before-function-paren': [2, 'never'],
    'no-trailing-spaces': [2, { 'skipBlankLines': true }]
  }
}
