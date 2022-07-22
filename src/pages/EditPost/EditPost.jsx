import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from './EditPost.module.css'

const EditPost = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.post)
  const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
        props.handleUpdatePost(formData, photoData.photo)
        navigate('/')
    } catch (err) {
        console.log(err)
    }
  }

  const {review} = formData
  const isFormInvalid = () => {
    return !(review)
  }

  const handleChangePhoto = (evt) => {
		setPhotoData({ photo: evt.target.files[0] })
	}

  return (
    <>
      <h1>Edit Post</h1>
      <div className={styles.editForm}>
      <h2>{formData.item.itemTitle}</h2>
      <h4>From: {formData.restaurant?.title}</h4>
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
        <div className={styles.inputContainer}>
          <label htmlFor="review" className={styles.label}>
						{formData.photo ? "Replace existing photo" : "Add Photo"}
					</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleChangePhoto}
					/>
				</div>
        <button disabled={isFormInvalid()} className={styles.button}>
        Edit Post
        </button>
      </form>
      </div>
    </>
  );
}

export default EditPost;