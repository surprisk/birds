//Module Bcryptjs pour le hash
const bcrypt = require('bcryptjs');

//Module jwt pour la gestion des tokens
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const msg = require("../messages");
const secrets = require("../config/secrets");

const entityName = "users"

exports.login = (req, res, next) => {
    db.collection(entityName).get()
        .then(users => {

            let bool = false;
            let userData;
            users.forEach(u => {
                if(u.data().username && u.data().username == req.body.username?req.body.username.toLowerCase(): ""){
                    bool = true;
                    userData = u.data();
                } 
            })

            if(!bool){
                res.status(401).json({"error": "user not found"});
            } else {
                bcrypt.compare(req.body.password, userData.password)
                .then(valid => {
                    if(!valid)
                    {
                        return res.status(401).json({"error": "identifiant ou mdp incorrect"});
                    }
                    const token = {token: jwt.sign(
                        {userId: userData.uid, username: userData.username},
                        secrets.auth_token,
                        {expiresIn: '12h'}
                    )}
                
                      // save user token
                      userData.token = token;
                
                      // user
                      res.status(200).json(userData);
                })
                .catch(err => res.status(500).json({"error": "crita"}, console.log(err)));
            }
        })
        .catch(err => res.status(500).json({"error": "crit"}, console.log(err)));
};

exports.signup = (req, res, next) => {
    bcrypt.genSalt(10)
        .then(salt => { 
            bcrypt.hash(req.body.password, salt)
                .then(hash => {

                    if(!(req.body.username && req.body.password))
                        res.status(400).send({ "error": msg.crud.error.undefined + entityName });

                    db.collection(entityName).get()
                    .then(users => {

                        let bool = false;
                        users.forEach(u => {
                            if(u.data().username == req.body.username.toLowerCase()){
                                bool = true;
                            } 
                        })
  
                        if(bool){
                            res.status(409).send("User Already Exist. Please Login");
                        } else {
                            db.collection(entityName).add({
                                username: req.body.username.toLowerCase(),
                                password: hash,
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
                    })
                })
                .catch(err => res.status(500).json("Critb"))
        })
        .catch(err => res.status(500).json("Crit"))
        
};
