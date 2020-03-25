/*Email input function for lower case*/
document.getElementById("mail").onchange = function () {
    let mail = document.getElementById("mail");
    mail.value = mail.value.toLowerCase();
}

/*Function for storage "textarea"*/
/*                  DON'T WORK!                         */
/*
window.onload = function () {
    let txt = document.getElementById("txt-area");
    txt.onchange = function () {
        txt.value = localStorage.setItem("saveText", "true");
    }

    if (localStorage.getItem("saveText") == null) {
        removeItem("saveText");
    } else if (localStorage.getItem("saveText") !== null) {
        localStorage.getItem("saveText").value = txt.value;
    }
}
*/