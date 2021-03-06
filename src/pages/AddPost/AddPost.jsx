import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './AddPost.module.css'
import RestaurantSearch from "../RestaurantSearch/RestaurantSearch";

const AddPost = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    review: '',
    foodBeverage: 'Food',
    itemTitle: '',
    itemPrice: '',
    title: 'None',
  })
  const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangePhoto = (e) => {
    setPhotoData({ photo: e.target.files[0] })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleAddPost(formData, photoData.photo)
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
      <main>
        <div className="feed-header">
          <h1 className={styles.addPostHeader}>Post Something!</h1>
        </div>
      <RestaurantSearch handleChange={handleChange}/>
          <form 
            onSubmit={handleSubmit} 
            autoComplete="off" 
            >
            <div className={styles.inputContainer}>
            <label htmlFor="item-input" className="form-label">
              Menu Item (required)
            </label><br/>
            <input 
              type="text"
              id="item-input"
              name="itemTitle"
              value={formData.itemTitle}
              onChange={handleChange}
            /><br/>
            <label htmlFor="item-price-input" className="form-label">
              Item Price
            </label><br/>
            <select 
              type="text"
              id="item-price-input"
              name="itemPrice"
              value={formData.itemPrice}
              onChange={handleChange}
            >
            <option value="﹩">﹩</option>
              <option value="﹩﹩">﹩﹩</option>
              <option value="﹩﹩﹩">﹩﹩﹩</option>
              <option value="﹩﹩﹩﹩">﹩﹩﹩﹩</option>
              <option value="﹩﹩﹩﹩﹩">﹩﹩﹩﹩﹩</option>
            </select>
          </div>
        <div className={styles.inputContainer}>
          <label htmlFor="review" className={styles.label}>Review</label><br/>
            <textarea
              type="text"
              autoComplete="off"
              id="review"
              value={review}
              name="review"
              onChange={handleChange}
              />
            </div>
            <div className="food-and-photo">
              <div className={styles.inputContainer}>
                <label htmlFor="food-beverage-select">Food or beverage?</label><br/>
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
            </div>
            <button disabled={isFormInvalid()} className={styles.button}>
            Add Post
            </button>
          </form>
      </main>
    </>
  );
}

export default AddPost;