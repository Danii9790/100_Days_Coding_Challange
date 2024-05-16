function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love coding"; }
    console.log("Making a t-shirt ".concat(size, " size with the massage ").concat(message, " print on it."));
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "code is love");
