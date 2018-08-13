$(document).ready(function () {

    var materialInputs1 = $('.new_form input.form-control');

    // activate labels for prefilled values
    materialInputs1.filter(function () {
        return $(this).val() !== "";
    }).siblings('label').addClass('active');

    // move label on focus
    materialInputs1.on('focus', function () {
        $(this).siblings('label').addClass('active');
    });

    // remove/keep label on blur
    materialInputs1.on('blur', function () {
        $(this).siblings('label').removeClass('active');

        if ($(this).val() !== '') {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });
});