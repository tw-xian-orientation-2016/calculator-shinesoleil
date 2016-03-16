$('.btn-number').click(function () {
  var number = this.id;
  var screen = $('#screen').val();

  if (number === 'point') {
    number = '.';
  }


  $('#screen').val(screen + number);
});

function setScreen(value) {
  $('#screen').val(value);
}

$(document).ready(function () {
  var service = new Service();

  $('.btn-mark').click(function () {
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

  $('#ac').click(function () {
    service.firstNum = undefined;
    service.secondNum = undefined;
    service.mark = undefined;

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



