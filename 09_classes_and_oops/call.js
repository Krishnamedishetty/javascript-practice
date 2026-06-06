function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const a = new createUser("a", "@gmail.com", "132")

console.log(a);
