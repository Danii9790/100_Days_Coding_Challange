var guests = ['Hassan', 'Umar', 'Owais'];
guests.forEach(function (guests) {
    console.log("Hello ".concat(guests, " you are invited for Today Dinner. "));
});
var unableToAttend = "Hassan";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Shani";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
