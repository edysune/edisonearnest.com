import WaterColor0 from "components/asciiArt/water-color-universe/water-color-00.txt";
import WaterColor1 from "components/asciiArt/water-color-universe/water-color-01.txt";
import WaterColor2 from "components/asciiArt/water-color-universe/water-color-02.txt";
import WaterColor3 from "components/asciiArt/water-color-universe/water-color-03.txt";
import WaterColor4 from "components/asciiArt/water-color-universe/water-color-04.txt";
import WaterColor5 from "components/asciiArt/water-color-universe/water-color-05.txt";

const cols = 370;
const rows = 70;
const hideCharPercent = .05;
const copyCharPercent = .95;
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function fetchNextImage(type, imageNumber) {

  console.log(`FETCHING ${type}-${imageNumber}.txt`);
  const frameFile = getWaterColorFile(imageNumber);

  return fetch(frameFile)
    .then(r => {
      const text = r.text();
      return text;
    });
}

  function getWaterColorFile(imageNumber) {
    switch(imageNumber) {
      case 0:
        return WaterColor0;
      case 1:
        return WaterColor1;
      case 2:
        return WaterColor2;
      case 3:
        return WaterColor3;
      case 4:
        return WaterColor4;
      case 5:
        return WaterColor5;
      default:
        return WaterColor0;
    }
  }

export function generateNextFrameV2(model) {
  return modifyImage(model, rows, cols);
};

function generateCharFromChar(modelLine, c) {
  if(Math.random() < hideCharPercent) {
    return ' ';
  }
  if(Math.random() < hideCharPercent + copyCharPercent) {
    return modelLine[c];
  }
  return chars[Math.floor(Math.random() * chars.length)];
}

function modifyImage(model, _rows, _cols) {
  let newModel = [];
  try {    
    for(let r = 0; r < _rows; r++) {
      const wholeStr = model[r];
  
      // eslint-disable-next-line
      const [first, second] = [wholeStr.slice(0, _cols), wholeStr.slice(_cols)];
      let nextLine = '';
      for(let c = 0; c < _cols; c++) {
        nextLine = nextLine + generateCharFromChar(first, c);
      }
      newModel.push(nextLine);
    }
  } catch (e) {
    console.log('something bad happened when modifying image...', e);
  }
  return newModel;
}
