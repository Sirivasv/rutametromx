import express, { Request, Response } from "express";
import path from "path";

// Constants
const PORT: number = 3000;

// App
const app: express.Express = express();

// Files paths
const sourcePath: string = path.resolve(`${__dirname}/../`);

app.use("/javascript", express.static(`${sourcePath}/javascript/`));

app.get("/", (req: Request, res: Response): void => {
    // tslint:disable-next-line:no-console
    console.log(__dirname);
    res.sendFile(`${sourcePath}/html/index.html`);
});

// App starts to listen
app.listen(PORT);
// tslint:disable-next-line:no-console
console.log(`Running on PORT: ${PORT}`);
