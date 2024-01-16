function login() {
    var usr = document.getElementById("username");
    var usrv = document.getElementById("username").value;
    var sifre = document.getElementById("password");
    var sifrev = document.getElementById("password").value;
    var wrng_usr = document.getElementById("wrng_usr");
    var entr_usr = document.getElementById("entr_usr");
    var wrng_pw = document.getElementById("wrng_pw");
    var entr_pw = document.getElementById("entr_pw");


    ////Kullanıcı adı ve Şifre boşsa
    if (document.getElementById("username").value.length < 1 && document.getElementById("password").value.length < 1) {
        document.getElementById("username").style.border = "1px solid red";
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("entr_usr").style.display = "block";
        document.getElementById("entr_pw").style.display = "block";
        //Kullanıcı Adı Boşsa
    } else if (document.getElementById("username").value.length < 1) {
        document.getElementById("username").style.border = "1px solid red";
        document.getElementById("entr_usr").style.display = "block";
        //Şifre Boşsa
    } else if (document.getElementById("password").value.length < 1) {
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("entr_pw").style.display = "block";
        //Kullanıcı Adı ve Şifre eşleşmezse, Wrong Password & Wrong Username
    } else if (usrv != "Furkan" && sifrev != "Coban") {
        usr.style.border = '1px solid red';
        sifre.style.border = '1px solid red';
        wrng_usr.style.display = 'block';
        wrng_pw.style.display = 'block';
        //Kullanıcı Adı serverdan alınan verilerle eşleşmiyorsa
    } else if (usrv != "Furkan") {
        usr.style.border = '1px solid red';
        wrng_usr.style.display = 'block';
        //Şifre serverdan alınan verilerle eşleşmiyorsa
    } else if (sifrev != "Coban") {
        sifre.style.border = '1px solid red';
        wrng_pw.style.display = 'block';
        //Kullanıcı Adı ve Şifre eşleşiyorsa
    } else if (usrv == "Furkan" && sifrev == "Coban") {
        swal({
            title: "Login Success!",
            text: "Hello, Furkan you will redirect to the next screen.",
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2500,
        });
        var time
        time = setTimeout(Arayuz, 1)
    }
}

//kullanıcı adı doldurulmamış veya yanlış olduğunda
function inputanUser() {
    document.getElementById("wrng_usr").style.display = "none";
    document.getElementById("entr_usr").style.display = "none";
    document.getElementById("username").style.border = "1px solid black";
}

//şifre girilmemiş veya yanlış olduğunda
function inputanPw() {
    document.getElementById("wrng_pw").style.display = "none";
    document.getElementById("entr_pw").style.display = "none";
    document.getElementById("username").style.border = "1px solid black";
}