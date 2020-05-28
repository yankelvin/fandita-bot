import cors from 'cors';
import routes from './routes';
import express from 'express';
import bodyParser from 'body-parser';

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();

        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(bodyParser.urlencoded({extended: true}));
        this.express.use(bodyParser.json());
    }

    private database(): void {}

    private routes(): void {
        this.express.use(routes);
    }
}

export default new App().express;
