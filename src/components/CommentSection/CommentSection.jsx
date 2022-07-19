import CommentCard from "../CommentCard/CommentCard"
import AddComment from "../../pages/AddComment/AddComment"
import PostDetails from "../../pages/PostDetails/PostDetails"


const CommentSection = (props) => {
  

  return(
    <div>
    <div>
      <h1>Comments</h1>
    </div>
    {props.postDetails?.comments.map(comment => (
      <CommentCard key={comment._id} comment={comment}/>
    ))}
    <AddComment postDetails={props.postDetails} setPostDetails={props.setPostDetails} />
    </div>
  )
}

export default CommentSection