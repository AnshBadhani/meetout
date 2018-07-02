
import {Request,Response} from "express";
import {User,UserModel} from "../models/user";

export class UserController{
    
    private userModel:UserModel;

    public constructor() {
        this.userModel=new UserModel();
    }

    public insert(req:Request,res:Response){
        
        this.userModel.insert(req.body,function(user){
            res.json(user);
        })    
    }

    public fetchAll(req:Request,res:Response){
        console.log(this);
        this.userModel.getAllUsers({},function(users){
            console.log(users);
            res.json(users);
        });
    }
}