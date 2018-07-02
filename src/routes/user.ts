import { Router, Request, Response } from 'express';
import {UserController} from  "../controllers/user";

const userController=new UserController();
export const UserRouter: Router = Router();
UserRouter.post("/add",userController.insert.bind(userController));
UserRouter.get("/get-all",userController.fetchAll.bind(userController));
