import { Request, Response  } from "express";
import {Usuario} from '../models/usuario'
import router from "../routes";


export const index = async (req: Request, res:Response) =>{

    let users = await Usuario.findAll

    res.render("pages/usuario",{
        users   
    })
}

