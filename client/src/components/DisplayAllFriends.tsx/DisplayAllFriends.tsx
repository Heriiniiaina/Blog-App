import { useEffect, useState } from "react";
import { IFriend, User } from "../../Constants/UserInterface";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { UserApi } from "../../api/user.api";




const DisplayAllFriends = () => {
    const [friends, setFriends] = useState<IFriend[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const token = useSelector((store:RootState)=>store.auth.token)  || "" 
    const user = jwtDecode(token) as User
    useEffect(() => {
       const fetchFriends = async () => {
            try {
                const res = await UserApi.getFriends(user.userId)
                setFriends(res.friends)
            } catch (error) {
                console.log(error)
            }
        }
        fetchFriends()
    }, [])
    console.log(friends)
  return (
    <div>DisplayAllFriends</div>
  )
}

export default DisplayAllFriends

