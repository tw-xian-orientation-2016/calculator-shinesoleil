$('.btn-number').click(function () {
  var number = this.id;
  var screen = $('#screen').val();

  if (number === 'point') {
    number = '.';
  }


  $('#screen').val(screen + number);
});

function set(value) {
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

      switch (this.id) {
        case 'sum':
          service.getSum(service, set);
          break;
        case 'diff':
          service.getDiff(service, set);
          break;
        case  'product':
          service.getProduct(service, set);
          break;
        case 'quotient':
          service.getQuotient(service, set);
      }
    }
  });

  $('#ac').click(function () {
    service.firstNum = undefined;
    service.secondNum = undefined;
    service.mark = undefined;

    $('#screen').val('');
  });

  $('#minus').click(function () {
    service.currentNum = $('#screen').val();
    service.getMinus(set);
  })

  $('#percent').click(function () {
    service.currentNum = $('#screen').val();
    service.getPercent(set);
  })
});



