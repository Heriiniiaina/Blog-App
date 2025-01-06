import { User } from "./UserInterface"

interface Like{
    user:string,
    post:string,
    _id:string
}
export interface POST{
    _id:string,
    content:string,
    image:string,
    createdAt:string,
    updatedAt:string,
    like:Like[],
    user:User
}