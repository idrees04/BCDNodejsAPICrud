import User from '../models/User.js';

export  const createUser = async(req, res) => {
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        res.json({error: err});
    }
}


export const getAllUsers = async (req, res) => {
    try{
        const users = await User.find({})
        res.status(200).json(users);
    }
    catch(err){
        res.json({error:err});
    }
}

export const getUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.status(200).json(user);
    }
    catch(err){
        res.json({error:err});
    }
}

export const updateUser = async (req, res) => {
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body,{
            new: true
        });
        res.status(200).json(updateUser);
    }
    catch(err){
        res.json({error:err});
    }
}

export const userDelete = async (req, res) => {
    try{
        const userDelete = await User.findByIdAndDelete(req.params.userId);
        res.status(200).json(userDelete);
    }
    catch(err){
        res.json({error:err});
    }
}