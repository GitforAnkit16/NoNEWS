require('dotenv').config();
const {MONGOURI} = require("./dev")
const {JWT_SECRET} = require("./dev")
module.exports = {
    MONGOURI: MONGOURI,
    JWT_SECRET: JWT_SECRET
}