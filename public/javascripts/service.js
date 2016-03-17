function Service() {
  this.firstNum;
  this.secondNum;
  this.mark;
  this.currentNum;
};

Service.prototype.getSum = function (service, triggerButton, callback) {
  $.ajax({
      type: 'POST',
      url: '/sum',
      data: {firstNum: this.firstNum, secondNum: this.secondNum}
    })
    .done(function (result) {
      if (triggerButton == 'mark') {
        service.firstNum = result;
      } else {
        service.firstNum = undefined;
      }
      callback(result);
    });
};

Service.prototype.getDiff = function (service, triggerButton, callback) {
  $.ajax({
      type: 'POST',
      url: '/diff',
      data: {firstNum: this.firstNum, secondNum: this.secondNum}
    })
    .done(function (result) {
      if (triggerButton == 'mark') {
        service.firstNum = result;
      } else {
        service.firstNum = undefined;
      }
      callback(result);
    });
};

Service.prototype.getProduct = function (service, triggerButton, callback) {
  $.ajax({
      type: 'POST',
      url: '/product',
      data: {firstNum: this.firstNum, secondNum: this.secondNum}
    })
    .done(function (result) {
      if(triggerButton == 'mark') {
        service.firstNum = result;
      } else {
        service.firstNum = undefined;
      }
      callback(result);
    });
};

Service.prototype.getQuotient = function (service, triggerButton, callback) {
  $.ajax({
      type: 'POST',
      url: '/quotient',
      data: {firstNum: this.firstNum, secondNum: this.secondNum}
    })
    .done(function (result) {
      if(triggerButton == 'mark') {
        service.firstNum = result;
      } else {
        service.firstNum = undefined;
      }
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
