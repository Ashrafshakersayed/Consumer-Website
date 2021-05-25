$(function () {
    $(".btn").click(function () {
        $(".form-signin").toggleClass("form-signin-left");
        $(".form-signup").toggleClass("form-signup-left");
        $(".frame").toggleClass("frame-long");
        $(".signup-inactive").toggleClass("signup-active");
        $(".signin-active").toggleClass("signin-inactive");
        $(".forgot").toggleClass("forgot-left");
        $(this).removeClass("idle").addClass("active");
    });
});



$('.form-signup').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        cache: false,
        url: $(this).attr('action'),
        data: $(this).serialize(),
        success: function (data) {

            console.log(data);
            alert(data);
            location.href= "log in.html";

        },
        error: (r) => {
            let errorrMessage = r.responseJSON.Message;
            console.log(r.responseJSON)
            for (let i in r.responseJSON.ModelState)
                errorrMessage += "\n" + r.responseJSON.ModelState[i][0];

            alert(errorrMessage);

        }

    });
});

    $('.form-signin').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            cache: false,
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function (data) {
                console.log(data);
                sessionStorage.setItem("AccessToken" , data.access_token);
                location.href ="./HTML/Home.html";

            },
            error: (r) => {
                alert(r.responseJSON.error_description)
                console.log(r)
            }


        });

    });

