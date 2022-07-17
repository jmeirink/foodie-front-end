import { useState } from "react";

const SearchForm = (props) => {
  const [formData, setFormData] = useState({
    location: '', 
    query: ''
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
          <label htmlFor="location-input" className="form-label">Location</label>
          <input 
            type="text" 
            name="location" 
            autoComplete="off"
            value={formData.location}
            onChange={handleChange}
          />
          <label htmlFor="location-input" className="form-label">Search:</label>
          <input 
            type="text" 
            name="query" 
            autoComplete="off"
            value={formData.query}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>

      </div>
    </>
  );
}

export default SearchForm;