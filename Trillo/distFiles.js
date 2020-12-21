const fsPromises = require("fs").promises;
const path = require("path");

const createDistStructure = async () => {
  const cssDistDir = path.join(".", "dist", "css");
  const imgDistDir = path.join(".", "dist", "img");

  try {
    await fsPromises.mkdir(cssDistDir, { recursive: true });
    await fsPromises.mkdir(imgDistDir, { recursive: true });
  } catch (err) {
    console.log(err);
  }
};

const copyCSSFiles = async () => {
  try {
    const pathCssSrc = path.join(".", "css", "style.css");
    const pathCssDest = path.join(".", "dist", "css", "style.css");
    await fsPromises.copyFile(pathCssSrc, pathCssDest);
  } catch (error) {
    console.log("copyCssFiles:: ", error);
  }
};

const copyImgFiles = async () => {
  try {
    const imgDirPath = path.join(".", "img");
    const imgDistPath = path.join(".", "dist", "img");

    const imgFiles = (await fsPromises.readdir(imgDirPath)) || [];

    console.log(imgFiles);

    if (imgFiles.count > 0) {
      imgFiles.forEach(async (imgFile) => {
        try {
          await fsPromises.copyFile(
            path.join(imgDirPath, imgFile),
            path.join(imgDistPath, imgFile)
          );
        } catch (error) {
          console.log("copyImgFile:: ", error);
        }
      });
    }
  } catch (error) {
    console.log("copyImgFiles:: ", error);
  }
};

const copyHTMLFiles = async () => {
  const htmlSrc = path.join(".", "index.html");
  const htmlDest = path.join(".", "index.html");

  try {
    await fsPromises.copyFile(htmlSrc, htmlDest);
  } catch (err) {
    console.log("copyHTMLFiles:: ", err);
  }
};

async function init() {
  await createDistStructure();
  await copyCSSFiles();
  await copyImgFiles();
  await copyHTMLFiles();
}

init();
