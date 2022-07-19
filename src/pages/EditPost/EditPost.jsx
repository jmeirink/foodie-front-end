import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from './EditPost.module.css'

const EditPost = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.post)

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
        props.handleUpdatePost(formData)
        navigate('/')
    } catch (err) {
        console.log(err)
    }
  }

  const {review} = formData
  const isFormInvalid = () => {
    return !(review)
  }

    return (
        <>
            <h1>Edit Post</h1>

            <h2>{formData.item.itemTitle}</h2>
            <h4>From: {formData.restaurant.title}</h4>
            <h4>Reviewed by {formData.author.name}</h4>
            <form onSubmit={handleSubmit} autoComplete="off" className={styles.container}>
            <div className={styles.inputContainer}>
            <label htmlFor="review" className={styles.label}>Review</label>
            <textarea
              type="text"
              autoComplete="off"
              id="review"
              value={review}
              name="review"
              onChange={handleChange}
            />
            </div>
    <button disabled={isFormInvalid()} className={styles.button}>
    Edit Post
    </button>

    </form>
    </>
    );
}

export default EditPost ;