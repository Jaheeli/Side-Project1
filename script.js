function makeIdCard() {
    var fullName = document.getElementById("fullName").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var address = document.getElementById("address").value;
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    var email = document.getElementById("email").value;
    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postJobTitle").innerHTML = jobTitle;
    document.getElementById("postAddress").innerHTML = address;
    document.getElementById("postPhoneNumber").innerHTML = phoneNumber;
    document.getElementById("postEmail").innerHTML = email;
}