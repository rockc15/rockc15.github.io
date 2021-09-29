(function () {
    emailjs.init("user_4O25WlZD8bbxksZ5KNNKK");
})();


$(document).ready(function () {
    $("#submit-btn").on('click', function (e) {
        let firstname = $("#lastname-input").val()
        let lastname = $("#firstname-input").val()
        let email = $("#email-input").val()
        let phone = $("#phone-input").val()
        let message = $("#message-input").val()

        // console.log("Username: " + username)
        // console.log("Password: " + password)
        // window.location.href = '../pages/beatmaker.html'
        var templateParams = {
            from_firstname: firstname,
            from_lastname: lastname,
            from_email: email,
            from_phone: phone,
            to_name: "Casey Rock",
            message: message,
            notes: 'Check this out!'
        };

        if (firstname != '' || lastname != '' || email != '' || phone != '' || message != '') {
            emailjs.send("service_qopltsp", "template_en22i8a", templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    window.location.href = '../index.html'
                }, function (error) {
                    console.log('FAILED...', error);
                });
        } else {
            $("#email-error").css("display", "flex")
        }

        return false
    });
});
