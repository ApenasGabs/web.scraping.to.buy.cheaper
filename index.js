const express = require("express");
const robo = require("./robo");

const app = express();


app.get("/", (req, res) => {
    robo()
    res.send("Home Page Route")
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`Server running on ${port}, http://localhost:${port}`)
);