import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './AddComment.module.css'
import { addComment } from "../../services/postService"



const AddComment = (props) =>  {
  const { postDetails, setPostDetails } = props
  const [formData, setFormData] = useState({
    comment: ''
  })

  const handleCommentChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCommentSubmit = async e => {
    e.preventDefault()
    try {
      const updatedPost = await addComment(postDetails._id,
        formData)
        setPostDetails(updatedPost)
    } catch (err) {
      console.log(err)
    }
  }

  const {comment} = formData
  const isFormInvalid = () => {
    return !(comment)
  }

    return(
    <>
      <main className={styles.addComment}>
        <h1 className={styles.addCommentHeader}>Add a comment!</h1>
      <form
        onSubmit={handleCommentSubmit}
        autoComplete="off"
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          <input
            className={styles.commentInput}
            type="text"
            id="comment-input"
            name="comment"
            value={formData.comment}
            onChange={handleCommentChange}
          />
        </div>
        <button disabled={isFormInvalid()} className={styles.commentButton}>
          Add Comment
        </button>
      </form>
      </main>
    </>
  )
}

export default AddComment