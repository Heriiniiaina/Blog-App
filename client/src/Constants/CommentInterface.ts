import { User } from "./UserInterface";

export interface COMMENT{
    _id:string,
    post:string,
    content:string,
    date:string,
    user:User,
    createdAt:string,
    updatedAt:string,
}