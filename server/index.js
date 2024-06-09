const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./router/user-router");
const database = require("./utils/db");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//? routers
app.use("/api/auth", userRouter)

app.get("/", (req, res) => {
    res.status(200).send("Hello, World!")
});



const PORT = process.env.PORT || 3000;
database().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is started at port ${PORT}`);
    })
});