import styles from './CommentCard.module.css'

const CommentCard = (props) => {
  return(
    <>
      <div>
        <h3>Hear what {props.comment.author} has to say!</h3>
        <p>{props.comment.comment}</p>
      </div>

      {/* {user?.profile === post.author._id &&
        <div className="comment-footer">
          <button onClick={()=> handleDeletePost(post._id)}>Delete</button>
          <Link to='/edit' state={{post}} >Edit</Link>
        </div>
      } */}
    </>
  )
}

export default CommentCard