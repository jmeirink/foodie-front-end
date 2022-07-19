import CommentCard from "../CommentCard/CommentCard"
import AddComment from "../../pages/AddComment/AddComment"
import PostDetails from "../../pages/PostDetails/PostDetails"
import styles from './CommentSection.module.css'


const CommentSection = (props) => {
  

  return(
    <div>
      <AddComment postDetails={props.postDetails} setPostDetails={props.setPostDetails} />
    {props.postDetails?.comments.map(comment => (
      <CommentCard key={comment._id} comment={comment}/>
    ))}
    </div>
  )
}

export default CommentSection