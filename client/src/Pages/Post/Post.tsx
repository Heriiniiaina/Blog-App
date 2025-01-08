import { useParams } from "react-router-dom";
import { getPost } from "../../services/post.service";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { POST } from "../../Constants/PostInterface";
import { getDate } from "../../services/data.service";
import Like from "../../components/Like/Like";
import { useEffect, useState } from "react";
import { getUser } from "../../services/user.service";
import { User } from "../../Constants/UserInterface";
import Comment from "../../components/Comment/Comment";
import { COMMENT } from "../../Constants/CommentInterface";
import { CommentApi } from "../../api/comment.api";
import DisplayAllComment from "../../components/DisplayAllComment/DisplayAllComment";
import { setLoading } from "../../store/slices/loading.slice";

const Post = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch()
  if(!id)
    dispatch(setLoading(true))
    
  const post = getPost(id) as POST;
  const [isLiked,setIsLiked] = useState<boolean>(false)
  const [comment,setComment] = useState<COMMENT[]>([])
  const user = getUser() as User
  console.log(post);
  const loading = useSelector((store: RootState) => store.loading.loading);
  useEffect(() => {
    const isLiked = post.like.some((like) => like.user === user?.userId);
    setIsLiked(isLiked);
  }, [post.like]); 
  useEffect(()=>{
   
    const getComment = async()=>{
      try {
       
        const commt = await CommentApi.getPostComment(post._id)
        setComment(commt.comment)
       
      } catch (error) {
        console.log(error)
      }
      
    }
    getComment()
  },[])
  return (
    <>
      <div className="bg-[#fff]">
        <div className="sticky top-0 z-10">
          <NavBar />
        </div>

        <div className="flex flex-col gap-3 h-full p-4">
          <div className="info-user">
            <div className="flex items-center gap-2">
              <img
                src={post.user.image}
                alt=""
                className="rounded-full w-[50px] h-[50px]"
              />
              <div>
                <h1 className="text-xl">
                  {post.user.nom} {post.user.prenom}
                </h1>
                <p className="text-sm text-gray-600">
                  {getDate(post.createdAt)}
                </p>
              </div>
            </div>
          </div>
          <div className="post-info flex flex-col gap-5">
            <div>
              <h1>{post.content}</h1>
              {post.image && (
                <img src={post.image} alt="" className="w-[400px] h-[400px]" />
              )}
            </div>
            <div className="flex justify-between">
                <Like like={post.like.length} isLiked={isLiked} postId={post._id} setIsLiked={setIsLiked}/>
                <Comment  comment={comment.length} post={post}/>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          loading || !post || !id
            ? "fixed bg-slate-600 inset-0 bg-opacity-90 flex justify-center items-center z-50"
            : "hidden"
        }
      >
        <Loading size="large" />
      </div>
      <div>
          <DisplayAllComment comments={comment}/>
      </div>
    </>
  );
};

export default Post;
