const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  "plugins": {
    "release-it-free-changelog": {
      "header": "# Changelog",
    }
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
