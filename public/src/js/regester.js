$("#hid").hide()

$(document).ready(function() {

    $("#basic-form").validate({
        rules: {
            mobile: {
                number: true,
                required: true,
                minlength: 11,
                maxlength: 11,
            },
            // age: {
            //     required: true,
            //     number: true,
            //     min: 18
            // },
            // email: {
            //     required: true,
            //     email: true
            // },
            // weight: {
            //     required: {
            //         depends: function(elem) {
            //             return $("#age").val() > 50
            //         }
            //     },
            //     number: true,
            //     min: 0
            // }
        },
        messages: {

            mobile: {
                number: "فیلد موبایل نامعتبر است",
                required: "فیلد موبایل الزامی است",
                minlength: "فیلد موبایل نباید کمتر از 11 کاراکتر باشد",
                maxlength: "فیلد موبایل نباید بیشتر از 11 کاراکتر باشد",
            }
        }
    });
});