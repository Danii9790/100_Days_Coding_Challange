var currentUser = ["Admin", "user1", "user2", "user3", "user4"];
var new_User = ["user1", "user5", "user6", "Admin", "user7"];
new_User.forEach(function (new_User) {
    if (currentUser.some(function (currentUser) { return currentUser.toLowerCase() ===
        new_User.toLowerCase(); })) {
        console.log("".concat(new_User, " New user need to enter a new user name."));
    }
    else {
        console.log("".concat(new_User, " is available."));
    }
});
