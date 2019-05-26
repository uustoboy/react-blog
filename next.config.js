module.exports = {
  pageExtensions: ['jsx', 'js'],
  webpack: config => {
  	console.log(config)
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config
  }
}

// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript()


const WithCss = require('@zeit/next-css')

if(typeof require !== 'undefined') {
    require.extensions['.css'] = file => {}
}

module.exports = WithCss({})
