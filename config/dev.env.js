'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
	BASE_API: '"https://ecigarette.icebartech.com/api/"',//外面的单引号必须要..
})
