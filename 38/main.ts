// Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often. This helps in making your code more flexible.

function describe_cities(city:string,country:string="Pakistan"){
    console.log(`${city} is in ${country}`)
}
describe_cities("lahore")
describe_cities("karachi")
describe_cities("tokyo","japan");