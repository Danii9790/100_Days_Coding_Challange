let guests :string[]=['Hassan','Umar','Owais'];
guests.forEach(guests=>
    {
        console.log(`Hello ${guests} you are invited for Today Dinner. `)
    })
let unableToAttend = "Hassan"
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Shani";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});