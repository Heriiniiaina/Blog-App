

type Props = {
    comment:number
}

const Comment = ({comment}:Props) => {
  return (
    <div>
        <button className="cursor-pointer">{comment > 1 ? `${comment} comment`: `${comment} comments`}</button>
    </div>
  )
}

export default Comment