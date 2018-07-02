// lib/app.ts
import * as express from "express";
import * as bodyParser from "body-parser";
import {UserRouter} from "./routes/user";
import {DB} from"./libs/db"
``
class App {

    public app: express.Application;
    public db:DB;

    constructor() {
        this.app = express();
        this.init();        
    }

    private init(): void{
        this.setMiddleWares();
        this.addRoutes();
        this.connetToDB();
    }

    private setMiddleWares(){
        // Middleware For JSON  application/json type post data
        this.app.use(bodyParser.json());
        // Middleware for post request application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private addRoutes():void{
        this.app.use("/user",UserRouter);     
    }

    private connetToDB(){
        this.db=new DB;
    }

}

export default new App().app;