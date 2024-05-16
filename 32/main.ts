let currentUser:string[]=["Admin","user1","user2","user3","user4"]
let new_User:string[]=["user1","user5","user6","Admin","user7"]
new_User.forEach(new_User=>{
    if (currentUser.some(currentUser=>currentUser.toLowerCase()===
        new_User.toLowerCase()))
        {
            console.log(`${new_User} New user need to enter a new user name.`)

        }
        else
        {console.log(`${new_User} is available.`)}
})