const express = require("express");
const cors = require("cors");

const db = require("./config/db");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

// -- API routes definitions
require("./species/species.routes")(app);
require("./birds/birds.routes")(app);
require("./users/users.routes")(app);
require("./overviews/overviews.routes")(app);
require("./songs/songs.routes")(app);
require("./habitats/habitats.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});