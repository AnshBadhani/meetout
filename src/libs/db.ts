import * as mongoose from "mongoose";

export class DB {

    public mongoUrl: string = 'mongodb://root:pass_123@ds223161.mlab.com:23161/meetout';

    constructor() {
        this.connect();
    }

    private connect(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
} 