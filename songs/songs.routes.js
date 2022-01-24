module.exports = app => {
    const songs = require("./songs.controller");
    let router = require("express").Router();
    let auth = require("../middleware/auth");

    // -- Create a new song
    router.post("/", songs.create);

    // -- Retrieve a song
    router.get("/:id", songs.read);

    // -- Retrieve all songs
    router.get("/", songs.readAll);

    // -- Update a song
    router.put("/:id", songs.update);

    // -- Delete a song
    router.delete("/:id", songs.delete);

    // -- Species url 
    app.use("/birdsAPI/songs", auth, router);
}