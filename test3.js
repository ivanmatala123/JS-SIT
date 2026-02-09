

function display(func){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    document.getElementById("display").innerHTML = `<h1 style = "color:red">${func(username, password)}</h1>`
}

const validate = (username, password) => {
    let validUser = "Admin"
    let validPass = "0123456789"

    if(username.toLocaleLowerCase() === "" || password.toLocaleLowerCase()===""){
        return `Please Input to the Field`;
    }

    if(validUser.toLowerCase()===username.toLowerCase() && validPass.toLocaleLowerCase() == password.toLocaleLowerCase()  ){
        return `Logged in: Welcome ${username}!`;
    }else{
        return `Password or Username is Incorrect`;
    }



}

