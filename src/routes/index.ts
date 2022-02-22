import * as express from "express";
import axios from "axios";
import { stringify } from "querystring";
import { Console } from "console";

export const register = (app: express.Application) => {
    // home page
    app.get("/", (req: any, res) => {
        res.render("index");
    });

    // about page
    app.get("/about", (req: any, res) => {
        res.render("about");
    });

    // get coingecko data
    app.post("/get_data",(req: any, res) => {
        axios
        .get(`https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/0xfc619ffcc0e0f30427bf938f9a1b2bfae15bdf84/market_chart/?vs_currency=bnb&days=${req.body.days}`)
        .then((response) => {
            // handle success
            res.status(200).json(
                response.data
            )
        })
        .catch((error) => {
            // handle error
            res.status(200).json(
                []
            )
        })
        .then(() => {
        // always executed
        });
    });
}
