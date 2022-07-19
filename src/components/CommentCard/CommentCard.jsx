import styles from './CommentCard.module.css'

const CommentCard = (props) => {
  return(
    <>
      <h3>Hear what {props.comment.author} has to say!</h3>
      <p>{props.comment.comment}</p>
    </>
  )
}

export default CommentCard