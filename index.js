var request = require("request");
var fs = require("fs");

request.get("https://sytantris.github.io/http-examples/future.jpg")
  .on("error", function(err) {
    throw err;
  })
  .on("response", function(resp) {
    console.log("Response code: " + resp.statusCode);
    console.log("Response message: " + resp.statusMessage);
    console.log("Content type: " + resp.headers["content-type"]);
    console.log("Downloading image..");
  })
  .pipe(fs.createWriteStream("./future.jpg"))
  .on("finish", function() {
    console.log("Download complete.");
  });