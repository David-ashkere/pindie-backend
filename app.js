const express = require("express");
const app = express();
const cors = require("./middlewares/cors");
const bodyParser = require("body-parser");
const path = require("path");
const connectToDatabase = require("./database/connect");

const mainRouter = require("./routes/main");
const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");

const PORT = 3000;

connectToDatabase();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "/public")),
    mainRouter,
    usersRouter,
    categoriesRouter,
    gamesRouter
)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})