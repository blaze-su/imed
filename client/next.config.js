const path = require('path')
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withImages = require('next-images');

const config = withSass({
  cssModules: true,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.join(__dirname, './src/components'),
      '@redux': path.join(__dirname, './src/redux'),
      '@interfaces': path.join(__dirname, './src/interfaces'),
      '@data': path.join(__dirname, './src/data')
    }
    
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
          loader: 'url-loader',
      }
    });

    return config
  },
})

module.exports = withImages(withFonts(config));