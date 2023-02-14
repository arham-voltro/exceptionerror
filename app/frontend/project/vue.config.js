const { defineConfig } = require("@vue/cli-service");
console.log(process.env.NODE_ENV);
module.exports = defineConfig({
  outputDir: "../../backend/public",
  indexPath: "../../backend/resources/views/appp.blade.php",
  // transpileDependencies: ["vuetify"],
  devServer: {
    proxy: 'https://demo.local.com'
  }
});
