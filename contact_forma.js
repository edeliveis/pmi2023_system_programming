$(document).ready(function(){
    $("#form").submit(function() {
        var form_data = $(this).serialize(); 
        $.ajax({
            type: "POST",
            url: "forma.php",
            data: form_data,
            success: swal({
                title: "Спасибо за заявку",
                icon: "success",
                timer: 2000
            })
        });
        event.preventDefault(); 
        $('#name').val('');
        $('#email').val('');
        $('#sms').val('');
    });
});
