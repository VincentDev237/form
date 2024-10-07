let submit = document.querySelector("#submit");
let text = document.querySelector("#passtext");



submit.addEventListener("click", (event) => {
    let password = document.querySelector("#password").value;
    let cpassword = document.querySelector("#cpassword").value;
    if (password != cpassword) {
        text.innerHTML = "your password didn't match";
        event.preventDefault();
    }


});


