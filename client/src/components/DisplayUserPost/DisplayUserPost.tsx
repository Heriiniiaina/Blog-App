
import { useParams } from "react-router-dom"


const DisplayUserPost = () => {
    
    const {id} = useParams()
    
    return (
    <div> {id}</div>
  )
}

export default DisplayUserPost