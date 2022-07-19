import { useState } from 'react'
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchRestaurant } from '../../services/foodService';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import styles from './RestaurantSearch.module.css'

const RestaurantSearch = (props) => {
  const [restaurants, setRestaurants] = useState([])
  
	const handleRestaurantSearch = async (formData) => {
    const restaurantResults = await searchRestaurant(formData)
    setRestaurants(restaurantResults.result.businesses)
  }

  return (
    <>
      <h3>Restaurant Search</h3>
      <SearchForm handleRestaurantSearch={handleRestaurantSearch} />
      {restaurants.length ? 
        <>
          <select name="title" id="restaurant-select" onChange={props.handleChange}>
            <option>Select Restaurant....</option>
            {restaurants.map(restaurant => 
              <RestaurantCard 
                key={restaurant.id}
                restaurant={restaurant}
              />
            )}
          </select>
        </>
        :
        <h3>Please search for a Restaurant!</h3>
      }
    </>
  );
}

export default RestaurantSearch;