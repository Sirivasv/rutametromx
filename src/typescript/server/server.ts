import * as express from "express";

// Constants
const PORT: number = 3000;

// App
const app = express();

app.use("/javascript", express.static(__dirname + "/javascript"));

app.get("/", (req, res) => {
    // tslint:disable-next-line:no-console
    console.log(__dirname);
    res.sendFile(__dirname + "/html/index.html");
});

app.listen(PORT);
// tslint:disable-next-line:no-console
console.log(`Running on PORT: ${PORT}`);
