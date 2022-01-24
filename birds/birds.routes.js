module.exports = app => {
    const bird = require("./birds.controller");
    const auth = require("../middleware/auth");
    var router = require("express").Router();

    // -- Create a new bird
    router.post("/", bird.create);
    
    // -- Retrieve a bird
    router.get("/:id", bird.read);

    // -- Update a bird
    router.put("/:id", bird.update);

    // -- Delete a bird
    router.delete("/:id", bird.delete);

    // -- Retrieve all bird
    router.get("/", bird.readAll);

    // -- Add a specie to a bird
    router.post("/:id/species", bird.addSpeciesToBirds);

    // -- Remove a specie to a bird
    router.delete("/:id/species", bird.removeSpeciesToBirds);

    // -- Add an habitat to a bird
    router.post("/:id/habitats", bird.addHabitatsToBirds);

    // -- Remove an habitat to a bird
    router.delete("/:id/habitats", bird.removeHabitatsToBirds);

    // -- Add an overview to a bird
    router.post("/:id/overviews", bird.addOverviewsToBirds);

    // -- Remove an overview to a bird
    router.delete("/:id/overviews", bird.removeOverviewsToBirds);

    // -- Add a song to a bird
    router.post("/:id/songs", bird.addSongsToBirds);

    // -- Remove a song to a bird
    router.delete("/:id/songs", bird.removeSongsToBirds);

    app.use("/birdsAPI/birds", auth, router);
}