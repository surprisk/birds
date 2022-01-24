module.exports = app => {
    const user = require("./users.controller");
    var router = require("express").Router();

    // -- Create a new user
    router.post("/login", user.login);
    
    // -- Retrieve a user
    router.post("/signup", user.signup);

    app.use("/birdsAPI/auth", router);
}