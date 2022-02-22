"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const axios_1 = __importDefault(require("axios"));
exports.register = (app) => {
    // home page
    app.get("/", (req, res) => {
        res.render("index");
    });
    // about page
    app.get("/about", (req, res) => {
        res.render("about");
    });
    // get coingecko data
    app.post("/get_data", (req, res) => {
        axios_1.default
            .get(`https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/0xfc619ffcc0e0f30427bf938f9a1b2bfae15bdf84/market_chart/?vs_currency=bnb&days=${req.body.days}`)
            .then((response) => {
            // handle success
            res.status(200).json(response.data);
        })
            .catch((error) => {
            // handle error
            res.status(200).json([]);
        })
            .then(() => {
            // always executed
        });
    });
};
//# sourceMappingURL=index.js.map