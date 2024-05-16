var userName = ['Admin', 'user1', 'user2', 'user3'];
userName.forEach(function (userName) {
    if (userName === 'Admin') {
        console.log('Hello Admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for logging in again"));
    }
});
