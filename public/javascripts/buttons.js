function setScreen(value) {
  $('#screen').val(value);
}

function createNewNumber(screenNum, newNum) {
  if(newNum === 'point') {
    if(screenNum.indexOf('.') !== -1) {
      return screenNum;
    } else {
      if(screenNum === '') {
        return '0.';
      } else {
        return screenNum + '.';
      }
    }
  } else {
    if(screenNum === '0' || screenNum === '') {
      return newNum;
    } else {
      return screenNum + newNum;
    }
  }
}



