import { POST } from "../../Constants/PostInterface"

interface DisplayPostProps {
    posts: POST
}

const DisplayPost = ({posts}:DisplayPostProps) => {
  return (
    <div>
        <h1>{posts.content}</h1>
        <p>{posts.createAt}</p>
    </div>
  )
}

export default DisplayPost