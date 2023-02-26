module.exports ={
	'env':{
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': [
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
		'react'
	],
	'rules': {
		'indent': [
			'warning',
			'tab'
		],
		'line-break-style': 0,
		'quotes': [
			'warning',
			'single'
		],
		'semi': [
			'warning',
			'always'
		],
		'jsx-quotes':[
			'warning',
			'prefer-single'
		],
		'react/prop-types': 'off',
		'react/jsx-max-props-per-line': [2, { maximum: 1 }],
	}
};
