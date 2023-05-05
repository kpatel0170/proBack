import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";



const app = express();
app.use(express.json());

const port = config.get<number>("port");
app.listen(port, async () => {
    logger.info(`Server listening on port ${port}`);
   
    await connect();
    routes(app);
});
