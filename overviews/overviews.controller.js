const db = require("../config/db");
const msg = require("../messages");
const entityName = "overviews"

// -- ADD AN OVERVIEW
exports.create = (req, res) => {
    if(!req.body.path || !req.body.name || !req.body.extension)
        res.status(400).send({ "error": msg.crud.error.undefined + entityName });
    

    db.collection(entityName).add({
        "name": req.body.name,
        "path": req.body.path,
        "name": req.body.name,
        "extension": req.body.extension,
        "author": req.body.author,
        "source": req.body.source
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

// -- GET AN OVERVIEW
exports.read = (req, res) => {
    db.collection(entityName).doc(req.params.id).get()
    .then(doc => {
        if(doc.data())
            res.status(200).json(doc.data());

        res.status(404).send({"error": entityName + msg.crud.error.not_found + req.params.id });
    })
    .catch(error => 
        res.status(500).send({"error": msg.crud.error.critical})
    )
}

// -- UPDATE AN OVERVIEW
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


// -- DELETE AN OVERVIEW
exports.delete = (req, res) => {
    if(!req.params.id)
        res.status(400).send({ "error": msg.crud.error.undefined + entityName });

    db.collection(entityName).doc(req.params.id).delete()
    .then(() => 
        res.status(201).send({ message: entityName + msg.crud.crud.deleted }) 
    )
    .catch(() => 
        res.status(500).send({"error": msg.crud.error.critical}) 
    )
}

// -- GET ALL OVERVIEWS
exports.readAll = (req, res) => {
    db.collection(entityName).get()
    .then(doc => {
        const birds = [];
        doc.map(bird => birds.push(bird.data()))
        res.status(200).json(birds);
    })
    .catch(() => 
        res.status(500).send({"error": msg.crud.error.critical})
    )
}

// -- IS OVERVIEW EXIST
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