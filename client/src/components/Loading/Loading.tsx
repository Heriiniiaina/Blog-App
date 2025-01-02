

import {OrbitProgress} from "react-loading-indicators"
interface LoadingProps{
  size:"large" | "medium" | "small"
}

const Loading = ({size}:LoadingProps) => {
  return( 
    <OrbitProgress color="#3166cc" size="small" text="" textColor="" />
  )
}

export default Loading