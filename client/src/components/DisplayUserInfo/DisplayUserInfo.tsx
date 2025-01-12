import { User } from "../../Constants/UserInterface";
import { InputFile } from "../InputFileComponent/InputFile";

interface USERINFO {
  user: User;
}
const DisplayUserInfo = ({ user }: USERINFO) => {
  return (
    <div>
      <div>{user.cover ? <img src={user.cover} alt="" /> : <InputFile />}</div>
      <div
        className="z-50 absolute flex flex-col gap-2 items-center  "
        style={{ top: "70%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <img
          src={user.image}
          alt=""
          className="w-[150px] h-[150px] rounded-full bg-transparent"
        />
        <p className="text-xl">
          {user.nom} {user.prenom}
        </p>
      </div>
      <div className="flex items-center justify-between p-2 py-4 bg-white shadow-sm shadow-slate-700">
        <div className="flex items-center gap-2 ">
          <div className="flex flex-col items-center">
            <p className="text-xl text-black">Posts</p>
            <p className="text-xl text-slate-500">50</p>
          </div>
        </div>
        <div className="flex items-center  gap-2">
          <div className="flex flex-col items-center ">
            <p className="text-xl text-black">Followers</p>
            <p className="text-xl text-slate-500">50</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl text-black">Following</p>
            <p className="text-xl text-slate-500">50</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayUserInfo;
