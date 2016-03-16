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

$(document).ready(function () {
  var isNewNumber = true;
  var service = new Service();

  setScreen('0');

  $('.btn-number').on('click', function () {
    var newNumber = this.id;
    var screenNum = $('#screen').val();

    if (isNewNumber === true) {
      isNewNumber = false;
      setScreen(createNewNumber('', newNumber));
    } else {
      setScreen(createNewNumber(screenNum, newNumber));
    }
  });

  $('.btn-mark').on('click', function () {
    isNewNumber = true;
    var triggerButton = 'mark';

    if (service.firstNum === undefined) {
      service.firstNum = $('#screen').val();
      service.mark = this.id;
    } else {
      service.secondNum = $('#screen').val();

      switch (service.mark) {
        case 'sum':
          service.getSum(service, triggerButton, setScreen);
          break;
        case 'diff':
          service.getDiff(service, triggerButton, setScreen);
          break;
        case  'product':
          service.getProduct(service, triggerButton,setScreen);
          break;
        case 'quotient':
          service.getQuotient(service,triggerButton, setScreen);
      }

      service.mark = this.id;
    }
  });

  $('#equal').on('click', function () {

    var triggerButton = 'equal';
    if (service.firstNum === undefined) {

    } else {
      service.secondNum = $('#screen').val();

      switch (service.mark) {
        case 'sum':
          service.getSum(service, triggerButton, setScreen);
          break;
        case 'diff':
          service.getDiff(service, triggerButton, setScreen);
          break;
        case  'product':
          service.getProduct(service, triggerButton, setScreen);
          break;
        case 'quotient':
          service.getQuotient(service, triggerButton, setScreen);
      }
      isNewNumber = true;
    }
  });

  $('#ac').on('click', function () {
    service.firstNum = undefined;
    service.secondNum = undefined;
    service.mark = undefined;

    isNewNumber = true;

    setScreen('0');
  });

  $('#minus').on('click', function () {
    service.currentNum = $('#screen').val();
    service.getMinus(setScreen);
  })

  $('#percent').on('click', function () {
    service.currentNum = $('#screen').val();
    service.getPercent(setScreen);
  })
});



