import express from 'express';
require('dotenv').config();
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";



const app = express();

const port = config.get<number>("port");
app.listen(port, async () => {
    logger.info(`Server listening on port ${port}`);
   
    await connect();
});
