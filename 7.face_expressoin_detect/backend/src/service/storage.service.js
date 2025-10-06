var ImageKit = require("imagekit");
var mongoose = require("mongoose");

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

function uplodFile(file) {
  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        file: file.buffer,
        fileName: "song",
        folder: "moody-audio",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
          console.log(result, "result");
        }
      }
    );
  });
}

module.exports = uplodFile;
