module.exports = app => {
    const habitats = require("./habitats.controller");
    let router = require("express").Router();
    let auth = require("../middleware/auth");

    // -- Create a new habitat
    router.post("/", habitats.create);

    // -- Retrieve a habitat
    router.get("/:id", habitats.read);

    // -- Retrieve all habitats
    router.get("/", habitats.readAll);

    // -- Update a habitat
    router.put("/:id", habitats.update);

    // -- Delete a habitat
    router.delete("/:id", habitats.delete);

    // -- Species url 
    app.use("/birdsAPI/habitats", auth, router);
}