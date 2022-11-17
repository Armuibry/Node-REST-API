import express from "express";

import {getUser, addUser,updateUser,deleteUser,getUserWithId} from "../model/usermodel.js"

const router = express();

router.get('/',getUser)

router.post('/',addUser);

router.get('/:id',getUserWithId);

router.delete('/:id',deleteUser);

router.put('/:id',updateUser);


export default router;