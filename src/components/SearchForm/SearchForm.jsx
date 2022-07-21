import { useState } from "react";
import styles from './SearchForm.css'

const SearchForm = (props) => {
  const [formData, setFormData] = useState({
    query: '',
    location: '' 
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleRestaurantSearch(formData)
  }

  return ( 
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="rest-inputs">
            <div className="search-div">
              <label htmlFor="search-input" className="rest-form-label">Search:</label>
                <input 
                type="text" 
                name="query" 
                autoComplete="off"
                value={formData.query}
                onChange={handleChange}
                />
              </div>
              <div className="location-div">
                <label htmlFor="location-input" className="rest-form-label">Location (or zip)</label>
                <input 
                type="text" 
                name="location" 
                autoComplete="off"
                value={formData.location}
                onChange={handleChange}
                />
              </div>
            </div>
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;