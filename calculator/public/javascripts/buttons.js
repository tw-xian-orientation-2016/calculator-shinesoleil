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
  var firstNum, secondNum;
  var mark;

  var service = new Service();

  $('#sum').click(function () {
    if(firstNum === undefined) {
      firstNum = $('#screen').val();
      mark = 'sum';
    } else {
      secondNum = $('#screen').val();
      service.getSum(firstNum, secondNum, setScreen);
    }
  })
});



