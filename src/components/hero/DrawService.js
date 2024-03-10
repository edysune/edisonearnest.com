const cols = 180;
const rows = 35;
const hideCharPercent = .2;
const copyCharPercent = .6;
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


const rateToChangeName = ".1"
const rateToChangeNameBack = ".02"

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

export function generateNextName(modifiedName, originalName){
  let newName = "";
  for(let i = 0; i < modifiedName.length; i++) {
    if (modifiedName[i] !== originalName[i]) {
      if(Math.random() < rateToChangeNameBack) {
        newName = newName + originalName[i];
      } else {
        newName = newName + modifiedName[i];
      }
    } else if(Math.random() < rateToChangeName) {
      newName = newName + getMappedChar(originalName[i]);
    } else {
      newName = newName + originalName[i];
    }
  }

  return newName;
}


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

function getMappedChar(char) {
  const getRandom = (items) => {
    return items[Math.floor(Math.random()*items.length)];
  };
  //todo: move this stuff out of here!
  switch(char.toLowerCase()) {
    case 'e':
      return getRandom(['e','3']);
    case 'a':
      return getRandom(['A','@']);
    case 'r':
      return getRandom(['R','4']);
    case 'n':
      return getRandom(['N']);
    case 's':
      return getRandom(['S', '$']);
    case 't':
      return getRandom(['T', '+']);
    case 'd':
      return getRandom(['D']);
    case 'i':
      return getRandom(['1', 'I', '|']);
    case 'o':
      return getRandom(['O', '0', '*']);
    default:
      return char;
  }
}