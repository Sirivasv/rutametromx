import e, { Request, Response } from "express";

// Constants
const PORT: number = 3000;

// App
const app: e.Express = e();

app.use("/javascript", e.static(`${__dirname}/javascript`));

app.get("/", (req: Request, res: Response): void => {
    // tslint:disable-next-line:no-console
    console.log(__dirname);
    res.sendFile(`${__dirname}/html/index.html`);
});

// App starts to listen
app.listen(PORT);
// tslint:disable-next-line:no-console
console.log(`Running on PORT: ${PORT}`);
