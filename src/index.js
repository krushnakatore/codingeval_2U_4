const express = require("express");

const app = express();

app.use(express.json());

const User = require("./models/user.model");

const userController = require("./controller/user.controller");

const Movies = require("./models/movies.model");

const moviesController = require("./controller/movies.controller");

const Shows = require("./models/shows.model");

const showsController = require("./controller/shows.controller");

const Seats = require("./models/seats.model");

const seatsController = require("./controller/seats.controller");

const Theatre = require("./models/theatre.model");

const theatreController = require("./controller/theatre.controller");

const Screens = require("./models/screens.model");

const screensController = require("./controller/screens.controller");

app.use("/user", userController);

app.use("/movies", moviesController);

app.use("/shows", showsController);

app.use("/seats", seatsController);

app.use("/theatre", theatreController);

app.use("/screens", screensController);






const connect = require("./configs/db")

app.listen(6789, async function(){

    await connect();
    console.log("POrt 6789");
});