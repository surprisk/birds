const db = require("../config/db");
const msg = require("../messages");
const entityName = "songs"

// -- ADD A SONG
exports.create = (req, res) => {
    if( !(req.body.name || req.body.path || req.body.filename || req.body.extension || req.body.source))
        res.status(400).send({ "error": msg.crud.error.undefined + entityName });
    

    db.collection(entityName).add({
        "name": req.body.name,
        "path": req.body.path,
        "filename": req.body.filename,
        "extension": req.body.extension,
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

// -- READ A SONG
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

// -- UPDATE A SONG
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

// -- DELETE A SONG
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

// -- GET ALL SONGS
exports.readAll = (req, res) => {
    db.collection(entityName).get()
    .then(doc => {
        const songs = [];
        doc.forEach(song => songs.push(song.data()))
        res.status(200).json(songs);
    })
    .catch(error => 
        res.status(500).send({"error": msg.crud.error.critical})
    )
}

// -- IS SONG EXIST
exports.isExist = async (id) => {
    return db.collection(entityName).doc(id).get()    
    .then(doc => {
        if(doc.data())
            return true;
        return false
    })
    .catch(error => {
        return false
    })
}
