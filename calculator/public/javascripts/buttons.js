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
  this.firstNum = value;
  console.log(this.firstNum);
}

function addButton() {
  $('#sum').click(function () {
    if(firstNum === null) {
      firstNum = $('#screen').val();
      mark = 'sum';
    } else {
      secondNum = $('#screen').val();
      Service.getSum(firstNum, secondNum, setScreen());
    }
  })
}

$(document).ready(function () {
  var service = new Service();

  $('.btn-mark').click(function () {
    if(service.firstNum === undefined) {
      service.firstNum = $('#screen').val();
      service.mark = 'sum';
    } else {
      service.secondNum = $('#screen').val();

      service.getSum(service, set);
    }
  })
});



