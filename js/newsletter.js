const txtEmail = document.getElementById("txtEmail")

const btn = document.querySelector("#btn")

btn.addEventListener("click", function () {
  txtEmail.disabled = false
  txtEmail.focus()  
})

function disableEmail(){
    txtEmail.disabled = true
}


