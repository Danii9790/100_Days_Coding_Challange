let userName:string[]=['Admin','user1','user2','user3']
userName.forEach(userName=>{
    if(userName==='Admin'){
        console.log('Hello Admin, would you like to see a status report?')
    }
    else{
        console.log(`Hello ${userName}, thank you for logging in again`)
        
    }
})