import styles from './CommentCard.module.css'

const CommentCard = (props) => {
  return(
    <>
      <h1>{props.comment.comment}</h1>
      <h2>{props.comment.author}</h2>
    </>
  )
}

export default CommentCard