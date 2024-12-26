interface Like{
    user:string,
    post:string
}
export interface POST{
    _id:string,
    content:string,
    image:string,
    createdAt:string,
    updatedAt:string,
    like:Like[],
    user:string
}