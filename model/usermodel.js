import {v4 as uuidv4} from "uuid"
import { users } from "../db/connection.js";


export const getUser = async(req,res)=>{
    const user = await users.find()
    res.status(200).send(user);
}

export const addUser = async(req,res)=>{
    
    try {
        const user = new users({...req.body,_id:uuidv4()})
        const data = await user.save()
        res.status(201).send(`User Added to DB ${data}`)
    } catch (error) {
        res.status(500).send(`Server Error ${error}`)
    }
}

export const getUserWithId = async(req,res)=>{
    try {
        const {id} = req.params;
    const findUser =await  users.find({_id:id})
    res.status(200).send(findUser)
    } catch (error) {
        res.status(400).send(error)
    }

}

export const deleteUser = (req,res)=>{
    const {id} = req.params;
     users.findOneAndDelete({_id:id},(error,user)=>{
        if(user==null){
            res.status(301).send(`User Not Fount Check ID`)
        }else{
            res.status(200).send(`Deleted User From DB:${user.name}`)
        }
    });
}

export const updateUser = (req,res)=>{
   
        const {id} = req.params;
    const {name,age,city} = req.body;
    users.findOneAndUpdate({_id:id},{$set:{name:name,age:age,city:city}},{new:true},(error,update)=>{
        if(error){
            res.send(`Error ${error}`)
        }else{
            res.status(200).send(`User Updated with ID: ${id} in DB`)
        }
    });
    
}