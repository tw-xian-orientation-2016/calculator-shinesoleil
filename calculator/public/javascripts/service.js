function Service() {
};

Service.prototype.getSum = function(firstNum, secondNum, callback) {
    $.ajax({
        type:'POST',
        url: '/sum',
        data: {firstNum: firstNum, secondNum: secondNum}
    })
        .done(function (result) {
          callback(result);
        });
};
