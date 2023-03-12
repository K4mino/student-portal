module.exports ={
  'env':{
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'settings':{
    'react':{
      'version': 'detect'
    }
  },
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'prettier'
  ],
  'rules': {
    'indent': [
      'warn',
      2
    ],
    'line-break-style': 0,
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'warn',
      'always'
    ],
    'jsx-quotes':[
      'warn',
      'prefer-single'
    ],
    'react/prop-types': 'off',
    'react/jsx-max-props-per-line': [2, { maximum: 1 }],
  }
};
