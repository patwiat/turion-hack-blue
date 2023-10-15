import express from 'express';
import mongoose from 'mongoose';

import userid from '../models/userid.js';

const router = express.router();

export const getUserID = async (req, res) =>
{
    try {
        const userContent = await userid.find();
        res.status(200).json(userContent);
    }
    catch (error) {
        res.status(404).json({ message: error.message});
    }

}

export const createAccount = async (req, res) => {
    const id  = req.body.id;
    const name = req.body.name;
 
    const foundUser = await userid.findOne({ id: id });
    if (foundUser)
    {
        try 
        {
            await userid.updateOne({ id: id },
            {
                
            })
        } 
        catch (err) 
        {
                console.log(err)
        }
    }
    else
    {
        try 
        {
            const newAccountContent = new userid({id, name})
            await newAccountContent.save();
            res.status(201).json(newAccountContent);
        } 
        catch (error) 
        {
            res.status(409).json({ message: error.message });
        }
    }
}

export default router;