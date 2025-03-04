import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

export const userSchema = new Schema<TUser>({
    id:{type:String, required:true},
    password:{type:String,required:true},
    needsPasswordChange:{type:Boolean,default:true},
    role:{
        type:String, 
        enum:{
           values:['admin','faculty','student'],
           message:'{VALUE} is not a valid role'
        }, 
        required:true
    },

    status:{
        type:String,
        enum:{
            values:['in-progress','blocked'],
            message:'{VALUE} is not a valid status'
        },
        required:true
    },

    isDeleted:{type:Boolean,default:false},


},{timestamps:true})


//creating the user model
export const UserModel= model<TUser>('ModelUsers',userSchema)