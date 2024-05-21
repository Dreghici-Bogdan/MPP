import mongoose from "mongoose";
import { INTEGER } from "sequelize";
import { v4 as uuidv4 } from 'uuid';

const postSchema = new mongoose.Schema({
    id:{type: String, default: uuidv4,unique:true, required:true},
    userid:{type:String, required:true},
    difficulty: {type:String},
    calories: {type:Number},
    });
export default mongoose.model('Post', postSchema);