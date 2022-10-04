import express  from "express";
import { createUser, getAllUsers, getUser, updateUser, userDelete } from "../controllers/user.js";

const router= express.Router();

router.post('/', createUser);

router.get('/', getAllUsers);

router.get('/:userId', getUser);

router.patch('/:userId', updateUser);

router.delete('/:userId',userDelete);

export default router;