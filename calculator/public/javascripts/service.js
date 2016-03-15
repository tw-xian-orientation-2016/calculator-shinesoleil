var service = {};

service.prototype.getSum = function(firstNum, secondNum, callback) {
    $.ajax({
        type:'POST',
        url: '/sum',
        data: {firstNum: firstNum, secondNum: secondNum}
    })
        .done(callback(result));
};