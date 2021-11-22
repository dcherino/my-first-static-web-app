module.exports = {
  webpack: (config, env) => {
    config.entry = {
      main: "./src/index.js",
      load: "./src/load-micro-frontend.js",
    };
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };

    config.output.filename = "static/js/[name].js";

    config.plugins[5].options.filename = "static/css/[name].css";
    config.plugins[5].options.moduleFilename = () => "static/css/main.css";
    return config;
  },
};
