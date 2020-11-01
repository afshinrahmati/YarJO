window.onload = () => {
    const myInput = document.getElementById('Domain');
    myInput.onpaste = e => e.preventDefault();
   }
// ********SELECT1Ajax*********
        $('#select1').on('change', function() {

            let code = $('#select1 option:selected').val();
            if (code > 0) {
                $.ajax({
                    url: '/dashboard/karfarma/Category/' + code,
                    type: "GET",
                    dataType: "json",
                    success: function(data) {
                        $("#Select2").remove();
                        $("#lable2").remove();
                        $("#Select3").remove();
                        $("#lable3").remove();

                        $.each(data, function(key, value) {
                            let parennts = document.getElementById("CategouryFind");
                            let lable = document.createElement("LABEL");
                            lable.setAttribute("id", "lable2");
                            let t = document.createTextNode("لطفا انتخاب نماید");
                            lable.appendChild(t);
                            parennts.appendChild(lable);

                            let sel2 = document.createElement("select");

                            sel2.setAttribute("id", "Select2");
                            sel2.setAttribute("class", "form-control");
                            sel2.setAttribute("name", "parentID");
                            parennts.appendChild(sel2);
                            let opt1 = document.createElement("option");
                            opt1.value = "0";
                            opt1.text = "انتخاب کنید";
                            sel2.add(opt1, null);
                            for (let i = 0; i < value.length; i++) {
                                let opt2 = document.createElement("option");
                                opt2.value = value[i].id;
                                opt2.text = value[i].name;
                                sel2.add(opt2, null);
                            };
                        });
                    }
                })
            } else {
                $("#Select2").remove();
                $("#lable2").remove();
                $("#lable3").remove();
                $("#Select3").remove();
            };
        });

// ********SELECT2Ajax*********
        $(document).on('change', '#Select2', function() {

            let code = $('#Select2 option:selected').val();
            console.log(code);
            if (code > 0) {
                $.ajax({
                    url: '/dashboard/karfarma/Category/' + code,
                    type: "GET",
                    dataType: "json",
                    success: function(data) {
                        $("#lable3").remove();
                        $("#Select3").remove();
                        $.each(data, function(key, value) {
                            let parennts = document.getElementById("CategouryFindd");

                            let lable = document.createElement("LABEL");
                            lable.setAttribute("id", "lable3");
                            let t = document.createTextNode("لطفا انتخاب نماید");
                            lable.appendChild(t);
                            parennts.appendChild(lable);
                            let sel = document.createElement("select");
                            sel.setAttribute("id", "Select3");
                            sel.setAttribute("class", "form-control");
                            sel.setAttribute("name", "parentID");
                            parennts.appendChild(sel);
                            let opt1 = document.createElement("option");
                            opt1.value = "0";
                            opt1.text = "انتخاب کنید";
                            sel.add(opt1, null);
                            for (let i = 0; i < value.length; i++) {
                                let opt2 = document.createElement("option");
                                opt2.value = value[i].id;
                                opt2.text = value[i].name;
                                sel.add(opt2, null);
                            };
                        });
                    }
                })
            } else {
                $("#lable3").remove();
                $("#Select3").remove();
            };
        });
        
// ********IMG**********
        function readURL(input) {
            if (input.files && input.files[0]) {

                var reader = new FileReader();

                reader.onload = function(e) {

                    $('.image-upload-wrap').hide();

                    $('.file-upload-image').attr('src', e.target.result);
                    $('.file-upload-content').show();

                    $('.image-title').html(input.files[0].name);
                };

                reader.readAsDataURL(input.files[0]);

            } else {
                removeUpload();
            }
        }

        function removeUpload() {
            $('.file-upload-input').replaceWith($('.file-upload-input').clone());
            $('.file-upload-content').hide();
            $('.image-upload-wrap').show();
        }
        $('.image-upload-wrap').bind('dragover', function() {
            $('.image-upload-wrap').addClass('image-dropping');
        });
        $('.image-upload-wrap').bind('dragleave', function() {
            $('.image-upload-wrap').removeClass('image-dropping');
        });
 
// *******Date*************
$('.birthDate-text-label').MdPersianDateTimePicker({
            targetTextSelector: '#birthDate-text',
            targetDateSelector: '#birthDate-date',
            // textFormat: 'yyyy-MM-dd HH:mm:ss',
            // dateFormat: 'yyyy-MM-dd HH:mm:ss',
            textFormat: 'yyyy-MM-dd',
            dateFormat: 'yyyy-MM-dd',
            isGregorian: false,
            enableTimePicker: true,
            // disableBeforeToday: true,
            calendarViewOnChange: function (date) {
                console.log(date);
            }
        });

