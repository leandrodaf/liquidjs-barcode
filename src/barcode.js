const bwipjs = require("bwip-js");

module.exports.generateBarCode = async config =>
  new Promise((resolve, reject) => {
    bwipjs.toBuffer(config, (error, png) => {
      if (error) return reject(error);
      return resolve("data:image/png;base64," + png.toString("base64"));
    });
  });
