import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PostApi } from "../api/post.api";
import { setPost } from "../store/slices/post.slice";
import { POST } from "../Constants/PostInterface";
import { RootState } from "../store/store";

export const getPost = (id?: string): POST | null => {
  const dispatch = useDispatch();
  const [post, setLocalPost] = useState<POST | null>(null);

  // Obtenir les posts du store Redux
  const postFromStore = useSelector((store: RootState) =>
    store.posts.posts.find((post) => post._id === id)
  );

  useEffect(() => {
    const fetchAllPosts = async () => {
      if (!postFromStore) {
        try {
          const postsFromApi = await PostApi.getAllpost();
          dispatch(setPost(postsFromApi));
        } catch (error) {
          console.error("Failed to fetch posts:", error);
        }
      }
    };

    fetchAllPosts();
  }, [dispatch, postFromStore]);

  useEffect(() => {
    // Mettre à jour le post localement si trouvé dans le store
    if (postFromStore) {
      setLocalPost(postFromStore);
    }
  }, [postFromStore]);

  return post;
};
