import CommentCard from "../CommentCard/CommentCard"
import AddComment from "../../pages/AddComment/AddComment"
import PostDetails from "../../pages/PostDetails/PostDetails"
import styles from './CommentSection.module.css'


const CommentSection = (props) => {
  if (props.postDetails.comments.length) {
    return(
      <div>
        <div>
          <h1>Comments</h1>
        </div>
        {props.postDetails?.comments.map(comment => (
          <CommentCard key={comment._id} comment={comment} profile={props.profile} setPostDetails={props.setPostDetails} handleDeleteComment={props.handleDeleteComment}/>
        ))}
        <AddComment postDetails={props.postDetails} setPostDetails={props.setPostDetails} />
      </div>
    )
  } else {
    return(
      <div>
        <div>
          <h1>There are no comments</h1>
        </div>
        <AddComment postDetails={props.postDetails} setPostDetails={props.setPostDetails} />
      </div>
    )
  }
}

export default CommentSection
