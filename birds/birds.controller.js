const db = require("../config/db");
const msg = require("../messages");
const speciesController = require("../species/species.controller");
const habitatsController = require("../habitats/habitats.controller");
const songsController = require("../songs/songs.controller");
const overviewsController = require("../overviews/overviews.controller");
const entityName = "birds"

// -- ADD A BIRD
exports.create = (req, res) => {
    if(!req.body.name)
        res.status(400).send({ "error": msg.crud.error.undefined + entityName });
    

    db.collection(entityName).add({
        "name": req.body.name
    })
    .then((doc) => {
        db.collection(entityName).doc(doc.id).update({
            "uid": doc.id
        });

        res.status(201).send({"message": entityName + msg.crud.added});
    })
    .catch(() => 
        res.status(500).send({"error": msg.crud.error.critical})
    );
}

// -- GET A BIRD
exports.read = (req, res) => {
    db.collection(entityName).doc(req.params.id).get()
    .then(doc => {
        if(doc.data())
            res.status(200).json(doc.data());
        else
            res.status(404).send({"error": entityName + msg.crud.error.not_found + req.params.id });
    })
    .catch(error => 
        res.status(500).send({"error": msg.crud.error.critical})
    )
}

// -- UPDATE A BIRD
exports.update = (req, res) => {
    if(!req.params.id)
        res.status(400).send({ "error": msg.crud.error.undefined + entityName });
    
    db.collection(entityName).doc(req.params.id).update({
        ...req.body
    })
    .then(() =>
        res.status(201).send({ message : entityName + msg.crud.updated })
    )
    .catch(() =>
        res.status(500).send({"error": msg.crud.error.critical})
    )
}


// -- DELETE A BIRD
exports.delete = (req, res) => {
    if(!req.params.id)
        res.status(400).send({ "error": msg.crud.error.undefined + entityName });

    db.collection(entityName).doc(req.params.id).delete()
    .then(() => 
        res.status(201).send({ message: entityName + msg.crud.deleted }) 
    )
    .catch(() => 
        res.status(500).send({"error": msg.crud.error.critical}) 
    )
}

// -- GET ALL BIRDS
exports.readAll = (req, res) => {
    db.collection(entityName).get()
    .then(doc => {
        const birds = [];
        doc.forEach(bird => birds.push(bird.data()))
        res.status(200).json(birds);
    })
    .catch(error => 
        res.status(500).send({"error": msg.crud.error.critical})
    )
}

// -- IS BIRD EXIST
exports.isExist = (id) => {
    db.collection(entityName).doc(id).get().then(doc => {
        if(doc.data())
            return true;
        return false
    })
    .catch(error => {
        return false
    })
}

exports.addSpeciesToBirds = (req, res) => {
    db.collection(entityName).doc(req.params.id).get()
    .then(doc => {
        let data = doc.data();
        let species = data.species?data.species:[];

        speciesController.isExist(req.body.specie).then(b => {
            if(b && !species.includes(req.body.specie)){
                species.push(req.body.specie);

                db.collection(entityName).doc(req.params.id).set({
                    species: species
                }, {merge:true})
                .then(() => res.send({"message": entityName + msg.crud.updated}))
                .catch(error => res.status(500).send({"error": msg.crud.error.critical}))
            } else {
                res.status(404).send({"error": entityName + msg.crud.error.not_found + req.body.habitat})
            }
        })
    })
    .catch(error => res.status(500).send({"error": msg.crud.error.critical}))
}

exports.removeSpeciesToBirds = (req, res) => {
    db.collection(entityName).doc(req.params.id).get()
    .then(doc => {
        let species = doc.data().species;

        if(species && species.includes(req.body.specie)){
            species.splice(species.indexOf(req.body.specie))

            db.collection(entityName).doc(req.params.id).set({
                species: species
            }, {merge:true})
            .then(() => res.send({"message": entityName + msg.crud.updated}))
            .catch(error => res.status(500).send({"error": msg.crud.error.critical}))

        } else {
            res.status(404).send({"error": entityName + msg.crud.error.not_found + req.body.habitat})
        }
    })
    .catch(error => res.status(500).send({"error": msg.crud.error.critical}))
}

exports.addHabitatsToBirds = (req, res) => {
    db.collection(entityName).doc(req.params.id).get()
    .then(doc => {
        let data = doc.data();
        let habitats = data.habitats?data.habitats:[];

        habitatsController.isExist(req.body.habitat).then(b => {
            if(b && !habitats.includes(req.body.habitat)){
                habitats.push(req.body.habitat);

                db.collection(entityName).doc(req.params.id).set({
                    habitats: habitats
                }, {merge:true})
                .then(() => res.send({"message": entityName + msg.crud.updated}))
                .catch(error => res.status(500).send({"error": msg.crud.error.critical}))
            } else {
                res.status(404).send({"error": entityName + msg.crud.error.not_found + req.body.habitat})
            }
        })
    })
    .catch(error => res.status(500).send({"error": msg.crud.error.critical}))
}

exports.removeHabitatsToBirds = (req, res) => {
    db.collection(entityName).doc(req.params.id).get()
    .then(doc => {
        let habitats = doc.data().habitats;

        if(habitats && habitats.includes(req.body.habitat)){
            habitats.splice(habitats.indexOf(req.body.habitat))

            db.collection(entityName).doc(req.params.id).set({
                habitats: habitats
            }, {merge:true})
            .then(() => res.send({"message": entityName + msg.crud.updated}))
            .catch(error => res.status(500).send({"error": msg.crud.error.critical}))

        } else {
            res.status(404).send({"error": entityName + msg.crud.error.not_found + req.body.habitat})
        }
    })
    .catch(error => res.status(500).send({"error": msg.crud.error.critical}))
}

exports.addSongsToBirds = (req, res) => {
    db.collection(entityName).doc(req.params.id).get()
    .then(doc => {
        let data = doc.data();
        let songs = data.songs?data.songs:[];

        songsController.isExist(req.body.song).then(b => {
            if(b && !songs.includes(req.body.song)){
                songs.push(req.body.song);

                db.collection(entityName).doc(req.params.id).set({
                    songs: songs
                }, {merge:true})
                .then(() => res.send({"message": entityName + msg.crud.updated}))
                .catch(error => res.status(500).send({"error": msg.crud.error.critical}))
            } else {
                res.status(404).send({"error": entityName + msg.crud.error.not_found + req.body.song})
            }
        })
    })
    .catch(error => res.status(500).send({"error": msg.crud.error.critical}))
}

exports.removeSongsToBirds = (req, res) => {
    db.collection(entityName).doc(req.params.id).get()
    .then(doc => {
        let songs = doc.data().songs;

        if(songs && songs.includes(req.body.song)){
            songs.splice(songs.indexOf(req.body.song))

            db.collection(entityName).doc(req.params.id).set({
                songs: songs
            }, {merge:true})
            .then(() => res.send({"message": entityName + msg.crud.updated}))
            .catch(error => res.status(500).send({"error": msg.crud.error.critical}))

        } else {
            res.status(404).send({"error": entityName + msg.crud.error.not_found + req.body.song})
        }
    })
    .catch(error => res.status(500).send({"error": msg.crud.error.critical}))
}

exports.addOverviewsToBirds = (req, res) => {
    db.collection(entityName).doc(req.params.id).get()
    .then(doc => {
        let data = doc.data();
        let overviews = data.overviews?data.overviews:[];

        overviewsController.isExist(req.body.overview).then(b => {
            if(b && !overviews.includes(req.body.overview)){
                overviews.push(req.body.overview);

                db.collection(entityName).doc(req.params.id).set({
                    overviews: overviews
                }, {merge:true})
                .then(() => res.send({"message": entityName + msg.crud.updated}))
                .catch(error => res.status(500).send({"error": msg.crud.error.critical}))
            } else {
                res.status(404).send({"error": entityName + msg.crud.error.not_found + req.body.overview})
            }
        })
    })
    .catch(error => res.status(500).send({"error": msg.crud.error.critical}))
}

exports.removeOverviewsToBirds = (req, res) => {
    db.collection(entityName).doc(req.params.id).get()
    .then(doc => {
        let overviews = doc.data().overviews;

        if(overviews && overviews.includes(req.body.overview)){
            overviews.splice(overviews.indexOf(req.body.overview))

            db.collection(entityName).doc(req.params.id).set({
                overviews: overviews
            }, {merge:true})
            .then(() => res.send({"message": entityName + msg.crud.updated}))
            .catch(error => res.status(500).send({"error": msg.crud.error.critical}))

        } else {
            res.status(404).send({"error": entityName + msg.crud.error.not_found + req.body.overview})
        }
    })
    .catch(error => res.status(500).send({"error": msg.crud.error.critical}))
}
