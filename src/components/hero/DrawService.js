const cols = 180;
const rows = 35;
const hideCharPercent = .2;
const copyCharPercent = .6;
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function getModelChar(model, i, j) {
  return model[i][j];
};

export function generateNextFrame(model) {
  if (!model || model.length === 0) {
    return generateNewImage(model);
  } else {
    return modifyImage(model);
  }
};

function generateChar(r, c) {
  if(Math.random() < hideCharPercent) {
    return ' ';
  }
  return chars[Math.floor(Math.random() * chars.length)];
}

function generateCharFromChar(model, r, c) {
  if(Math.random() < hideCharPercent) {
    return ' ';
  }
  if(Math.random() < hideCharPercent + copyCharPercent) {
    return model[r][c];
  }
  return chars[Math.floor(Math.random() * chars.length)];
}

function generateRow(rowLength, r) {
  let randomString = "";
  for (let c = 0; c < rowLength; c++) {
    randomString += generateChar(r, c);
  }
  return randomString;
}

// function replaceAt(str, index, chr) {
//   return str.substring(0,index) + chr + str.substring(index+1);
// }

function modifyImage(model) {
  let newModel = [];
  for(let r = 0; r < rows; r++) {
    let nextLine = "";
    for(let c = 0; c < cols; c++) {
      nextLine = nextLine + generateCharFromChar(model, r, c);
    }
    newModel.push(nextLine);
  }
  return newModel;
}

function generateNewImage(model) {
  model = [];
  for(let r = 0; r < rows; r++) {
    model.push(generateRow(cols, r));
  }
  return model;
}
