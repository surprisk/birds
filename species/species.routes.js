module.exports = app => {
    const species = require("./species.controller");
    var router = require("express").Router();

    // -- Create a new species
    router.post("/", species.create);

    // // -- Retrieve all species
    // router.get("/", species.findAll);

    // -- Retrieve a species
    router.get("/:id", species.read);

    // -- Retrieve all species
    router.get("/", species.readAll);

    // -- Update a species
    router.put("/:id", species.update);

    // -- Delete a species
    router.delete("/:id", species.delete);

    // -- Species url 
    app.use("/birdsAPI/species", router);
}