import { useDispatch, useSelector } from "react-redux";
import InputCustom from "../InputCutom/InputCustom";
import { RootState } from "../../store/store";
import { User } from "../../Constants/UserInterface";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

import ButtonCustom from "../ButonCustom/ButtonCustom";
import { PostApi } from "../../api/post.api";
import { setLoading } from "../../store/slices/loading.slice";

const PostForm = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const token = useSelector((store: RootState) => store.auth.token) || "";
  const user = jwtDecode(token) as User;

  useEffect(() => {
    if (content.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [content, image]);
  const onFileChange = (e: any) => {
    setImage(e.target.files[0]);
  };
  const onChange = (e: any) => {
    setContent(e.target.value);
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log(user.userId);
    const formData = new FormData();
    formData.append("content", content);
    formData.append("image", image);
    formData.append("userId", user.userId);
    dispatch(setLoading(true));
    try {
      const res = await PostApi.addNewPost(formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="flex flex-col gap-4 md:w-[600px] p-5 m-6 bg-white shadow-md shadow-gray-400">
      <div>
        <h4>Create post</h4>
      </div>
      <hr />
      <div>
        <form
          action=""
          onSubmit={onSubmit}
          className="flex flex-col gap-4"
          encType="multipart/form-data"
        >
          <div className="flex items-center gap-3">
            <img
              src={user.image}
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <InputCustom
              onChange={onChange}
              name="content"
              placeHolder="Ecrire quelque chose"
              type="text"
              className="outline-none"
            />
          </div>
          <hr />
          <div>
            <InputCustom
              name="image"
              onChange={onFileChange}
              placeHolder="URL de l'image"
              type="file"
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-50 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-slate-50 dark:file:text-neutral-400"
            />
          </div>
          <ButtonCustom
            isDisabled={isDisabled}
            type="submit"
            className={`
    ${
      isDisabled
        ? "bg-blue-400 text-gray-200 cursor-not-allowed"
        : "bg-blue-600 text-white cursor-pointer"
    } 
    rounded-[50px] font-bold w-44 h-12 cursor-pointer
  `}
          >
            Post
          </ButtonCustom>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
