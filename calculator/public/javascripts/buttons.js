$('.btn-number').click(function () {
    var number = this.id;
    var screen = $('#screen').val();

    if (number === 'point') {
        number = '.';
    }

    $('#screen').val(screen + number);
});



