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
          <label htmlFor="location-input" className="form-label">Search:</label>
          <input 
            type="text" 
            name="query" 
            autoComplete="off"
            value={formData.query}
            onChange={handleChange}
          />
          <label htmlFor="location-input" className="form-label">Location (or zip)</label>
          <input 
            type="text" 
            name="location" 
            autoComplete="off"
            value={formData.location}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>

      </div>
    </>
  );
}

export default SearchForm;