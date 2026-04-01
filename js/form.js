function validateForm() {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let time = document.getElementById("time").value;

    let valid = true;
    let nameRegex = /^[A-Za-zÀ-ỹ\s]+$/;
    if (!nameRegex.test(name)) {
        document.getElementById("nameMsg").innerText = "Không hợp lệ";
        valid = false;
    } else {
        document.getElementById("nameMsg").innerText = "";
    }
    let phoneRegex = /^(0[3|5|7|8|9|1])[0-9]{8}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneMsg").innerText = "Không hợp lệ";
        valid = false;
    } else {
        document.getElementById("phoneMsg").innerText = "";
    }
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailMsg").innerText = "Không hợp lệ";
        valid = false;
    } else {
        document.getElementById("emailMsg").innerText = "";
    }
    if (time === "") {
        document.getElementById("timeMsg").innerText = "Không hợp lệ";
        valid = false;
    } else {
        document.getElementById("timeMsg").innerText = "";
    }
    if (valid) {
        let myModal = new bootstrap.Modal(document.getElementById('success'));
        myModal.show();
    }
}