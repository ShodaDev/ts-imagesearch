import config from "./config";
import Randomnumber from "./randomnumber";

import express from 'express';
const app = express();

// @ts-ignore
import gis from 'g-i-s';

import bodyParser from 'body-parser';
import cors from 'cors';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.listen(config.port, () => {
    console.log(`Server started at http://localhost:${config.port}`);
});

app.get("/api/", (req, res) => {
    res.send("API is reachable!");
});

app.post('/api/gis', (req, res) => {
    let serchterm : string = req.body.searchterm
    let rannum : number = new Randomnumber().getrandomnumber(99);
    gis(serchterm, logResults());
    function logResults() {
        return function (error : object, results : any) {
            if (error) {
                return res.json(error) && console.log(error);
            }
            else {
                res.json(results[rannum]);
            }
        }
    }
});