const fs = require("fs");
const sharp = require("sharp");

const imageResizing = async (req, res, next) => {
  const { image, width, height } = req.params;
  if (fs.existsSync(`editedImages/${image}`)) {
    res.send("file already resized");
  } else {
    try {
      const Imageinfo = await sharp(`inputImages/${image}`)
        .resize(+width, +height)
        .jpeg()
        .toFile(`editedImages/${image}`);
      res.send(Imageinfo);
      console.log(Imageinfo);
    } catch (error) {
      res.send(error.message);
    }
  }
};
module.exports = { imageResizing };
