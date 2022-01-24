module.exports = app => {
    const overviews = require("./overviews.controller");
    var router = require("express").Router();

    // -- Create a new overviews
    router.post("/", overviews.create);
    
    // -- Retrieve a overviews
    router.get("/:id", overviews.read);

    // -- Update a overviews
    router.put("/:id", overviews.update);

    // -- Delete a overviews
    router.delete("/:id", overviews.delete);

    // -- Retrieve all overviews
    router.get("/", overviews.readAll);

    app.use("/birdsAPI/overviews", router);
}