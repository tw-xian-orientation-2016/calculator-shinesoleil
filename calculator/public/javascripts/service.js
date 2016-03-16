function Service() {
  this.firstNum;
  this.secondNum;
  this.mark;
  this.currentNum;
};

Service.prototype.getSum = function (service, callback) {
  $.ajax({
      type: 'POST',
      url: '/sum',
      data: {firstNum: this.firstNum, secondNum: this.secondNum}
    })
    .done(function (result) {
      service.firstNum = result;
      callback(result);
    });
};

Service.prototype.getDiff = function (service, callback) {
  $.ajax({
      type: 'POST',
      url: '/diff',
      data: {firstNum: this.firstNum, secondNum: this.secondNum}
    })
    .done(function (result) {
      service.firstNum = result;
      callback(result);
    });
};

Service.prototype.getProduct = function (service, callback) {
  $.ajax({
      type: 'POST',
      url: '/product',
      data: {firstNum: this.firstNum, secondNum: this.secondNum}
    })
    .done(function (result) {
      service.firstNum = result;
      callback(result);
    });
};

Service.prototype.getQuotient = function (service, callback) {
  $.ajax({
      type: 'POST',
      url: '/quotient',
      data: {firstNum: this.firstNum, secondNum: this.secondNum}
    })
    .done(function (result) {
      service.firstNum = result;
      callback(result);
    });
};

Service.prototype.getMinus = function (callback) {
  $.ajax({
      type: 'POST',
      url: '/minus',
      data: {num: this.currentNum}
    })
    .done(function (result) {
      callback(result);
    });
};

Service.prototype.getPercent = function (callback) {
  $.ajax({
      type: 'POST',
      url: '/percent',
      data: {num: this.currentNum}
    })
    .done(function (result) {
      callback(result);
    });
};
