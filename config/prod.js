const dotenv = require("dotenv");

dotenv.config();
module.exports = {
    MOGOURI: process.env.MOGOURI.toString(), 
    JWT_SECRET: process.env.JWT_SEC.toString(), 
}