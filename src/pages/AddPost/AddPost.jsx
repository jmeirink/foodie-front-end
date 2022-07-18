import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './AddPost.module.css'

const AddPost = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    review: '',
  })
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
      //call to back end goes here
      props.handleAddPost(formData)
      navigate('/')
    } catch (err) {
        console.log(err)
    }
  }
  
  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }


  const {review} = formData
  const isFormInvalid = () => {
    return !(review)
  }

  return (
    <>
      <h1>Add a Post</h1>

      <form 
        onSubmit={handleSubmit} 
        autoComplete="off" 
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="item-input" className="form-label">
              Menu Item (required)
            </label>
            <input 
              type="text"
              id="item-input"
              name="item"
              value={formData.item}
              onChange={handleChange}
              required
            />
          </div>
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
          <label htmlFor="food-beverage-select">Food or beverage?</label>
            <select 
              id="food-beverage-select"
              name="foodBeverage" 
              value={formData.foodBeverage}
              onChange={handleChange}
            >
              <option value="Food">Food</option>
              <option value="Beverage">Beverage</option>
            </select>
        </div>
        <div className={styles.inputContainer}>
					<label htmlFor="photo-upload" className="form-label">
						Upload Photo
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
          Add Post
        </button>



      </form>
    </>
  );
}

export default AddPost;