import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PostApi } from "../api/post.api";
import { setPost } from "../store/slices/post.slice";
import { POST } from "../Constants/PostInterface";
import { RootState } from "../store/store";

export const getPost = (id?: string)  => {
    const [post,setPost] = useState<POST>()
    

    return post
};
