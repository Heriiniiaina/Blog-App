
import { useParams } from "react-router-dom"


const DisplayUserPost = () => {
    
    const {id} = useParams()
    
    return (
    <div>  fuck{id}</div>
  )
}

export default DisplayUserPost