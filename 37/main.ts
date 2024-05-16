// Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters.

function make_shirt(size:string = "Large",message:string="I love coding"){
    console.log(`Making a t-shirt ${size} size with the massage ${message} print on it.`)

}
make_shirt(); // Default large and message.
make_shirt("Medium") // Default message 
make_shirt("small","code is love") // Custom message and size