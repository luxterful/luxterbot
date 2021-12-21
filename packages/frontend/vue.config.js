if (!process.env.VUE_APP_SERVICE_1_URL) {
  console.error("VUE_APP_SERVICE_1_URL environment variable not set");
  process.exit(1);
}

module.exports = {
  lintOnSave: false,
  devServer: { port: 8080 },
};
