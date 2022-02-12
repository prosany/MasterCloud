import dotenv from "dotenv";
dotenv.config();

let CONFIG = {};

CONFIG.PORT = process.env.PORT || 8080;
CONFIG.NODE_ENV = process.env.NODE_ENV || "development";

export default CONFIG;
