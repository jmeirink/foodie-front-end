import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './AddComment.css'


const AddComment = (props) =>  {
  const navigate = useNavigate()
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
      // handleAddComment(formData)
      navigate('/')
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
      <main>
        <h1>Add a comment!</h1>
      <form
        onSubmit={handleCommentSubmit}
        autoComplete="off"
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          <input 
            type="text"
            id="comment-input"
            name="comment"
            value={formData.comment}
            onChange={handleCommentChange}
          />
        </div>
        <button disabled={isFormInvalid()} className={styles.button}>
          Add Comment
        </button>
      </form>
      </main>
    </>
  )
}

export default AddComment