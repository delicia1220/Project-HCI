document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    let form = document.getElementById('register');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let username = document.getElementById('inputUsername');
        let bugDesc = document.getElementById('inputDesc');
        let email = document.getElementById('inputEmail');
        let server = document.getElementById('inputServer');

        if (username.value == "" || bugDesc.value == "" || server.value == "" || email.value == "") {
            alert("Please fill in all fields");
            return;
        }

        if (server.value != "NA" && server.value != "LATAM" && server.value != "BR" && server.value != "EU" && server.value != "KR" && server.value != "AP") {
            alert("Server does not exist! (NA, LATAM, BR, EU, KR, AP)");
            return;
        }

        if (!email.value.endsWith("@gmail.com")) {
            alert("Email must be end with @gmail.com");
            return;
        }

        if (username.value.includes('-') || bugDesc.value.includes('-') || email.value.includes('-') || server.value.includes('-')) {
            alert("Inputs must not contain '-' character");
            return;
        }

        if (bugDesc.value.length < 20) {
            alert("Bug description must be at least 20 characters long");
            return;
        }

        alert("Register success");
    });
});
