function Service() {
  this.firstNum;
  this.secondNum;
  this.mark;
};

Service.prototype.getSum = function(service, callback) {
    $.ajax({
        type:'POST',
        url: '/sum',
        data: {firstNum: this.firstNum, secondNum: this.secondNum}
    })
        .done(function (result) {
          service.firstNum = result;
          callback(result);
        });
};
