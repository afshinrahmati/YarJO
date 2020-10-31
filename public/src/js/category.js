$('#select2').hide();
$('#select3').hide();
$('#select1').on('change', function() {


    let code = $('#select1 option:selected').val();

    if (code > 0) {
        console.log(code);
        $.ajax({
            url: '/dashboard/admin/CategoryID/' + code,
            type: "GET",
            dataType: "json",
            success: function(data) {
                $("#select2").empty();
                $("#select3").hide();
                // $("#select2").append('<option> انتخاب کنید</option>');

                $.each(data, function(key, value) {
                    //key :value ==>City = tehran
                    console.log(value);
                    $('#select2').show();
                    $('#select2').append('<option value="' + 0 + '">' + "پدر ندارد" + '</option>')
                    for (let i = 0; i < value.length; i++) {
                        $('#select2').append('<option value="' + value[i].id + '">' + value[i].name + '</option>');

                    }
                });
            }
        })
    } else {
        $("#select2").hide();
        $("#select3").hide();
    }

});
$('#select2').on('change', function() {


    let code = $('#select2 option:selected').val();
    console.log(code)
    if (code > 0) {

        $.ajax({
            url: '/dashboard/admin/CategoryID/' + code,
            type: "GET",
            dataType: "json",
            success: function(data) {
              $("#select3").empty();
                // $("#select2").append('<option> انتخاب کنید</option>');

                $.each(data, function(key, value) {



                    $('#select3').show();

                    for (let i = 0; i < value.length; i++) {
                        $('#select3').append('<option value="' + value[i].id + '">' + value[i].name + '</option>');

                    }
                });
            }
        })
    } else {
        $("#select3").hide();
    }

});