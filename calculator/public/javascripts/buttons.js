function setScreen(value) {
  $('#screen').val(value);
}


$(document).ready(function () {
  var newNumber = true;
  var service = new Service();

  setScreen('0');

  $('.btn-number').click(function () {
    var number = this.id;
    var screen = $('#screen').val();

    if (number === 'point') {
      number = '.';
    }

    if (newNumber === true) {
      newNumber = false;
      $('#screen').val(number);
    } else {
      $('#screen').val(screen + number);
    }
  });

  $('.btn-mark').click(function () {
    newNumber = true;

    if (service.firstNum === undefined) {
      service.firstNum = $('#screen').val();
      service.mark = this.id;
    } else {
      service.secondNum = $('#screen').val();

      switch (service.mark) {
        case 'sum':
          service.getSum(service, setScreen);
          break;
        case 'diff':
          service.getDiff(service, setScreen);
          break;
        case  'product':
          service.getProduct(service, setScreen);
          break;
        case 'quotient':
          service.getQuotient(service, setScreen);
      }

      service.mark = this.id;
    }
  });

  $('#equal').click(function () {
    if (service.firstNum === undefined) {

    } else {
      service.secondNum = $('#screen').val();

      switch (service.mark) {
        case 'sum':
          service.getSum(service, setScreen);
          break;
        case 'diff':
          service.getDiff(service, setScreen);
          break;
        case  'product':
          service.getProduct(service, setScreen);
          break;
        case 'quotient':
          service.getQuotient(service, setScreen);
      }
      newNumber = true;
    }
  });

  $('#ac').click(function () {
    service.firstNum = undefined;
    service.secondNum = undefined;
    service.mark = undefined;

    newNumber = true;

    setScreen('0');
  });

  $('#minus').click(function () {
    service.currentNum = $('#screen').val();
    service.getMinus(setScreen);
  })

  $('#percent').click(function () {
    service.currentNum = $('#screen').val();
    service.getPercent(setScreen);
  })
});



