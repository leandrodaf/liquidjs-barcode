const bwipjs = require("bwip-js");

module.exports = () => {
  return function() {
    this.registerFilter("barcode", async (text = "bar-code", args) => {
      let configs = {};

      if (args) {
        configs = args.split(",").reduce((configs, config) => {
          const row = config.trim().split(":");
          configs[row[0]] = Number(row[1]) || row[1].trim();
          return configs;
        }, []);
      }

      configs.text = `${text}`;
      configs.bcid = configs.bcid || "code128";

      return await generateBarCode({ ...configs });
    });
  };
};

const generateBarCode = async config =>
  new Promise((resolve, reject) => {
    bwipjs.toBuffer(config, (error, png) => {
      if (error) return reject(error);
      return resolve("data:image/png;base64," + png.toString("base64"));
    });
  });
