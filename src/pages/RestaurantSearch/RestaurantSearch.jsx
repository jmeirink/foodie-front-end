import { useState } from 'react'
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchRestaurant } from '../../services/foodService';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

const RestaurantSearch = () => {
  const [restaurants, setRestaurants] = useState([])
  
	const handleRestaurantSearch = async (formData) => {
    const restaurantResults = await searchRestaurant(formData)
    setRestaurants(restaurantResults.results)
  }

  return (
    <>
      <h3>Such Restaurantz</h3>
      <SearchForm handleRestaurantSearch={handleRestaurantSearch} />
      {restaurants.length ? 
        <>
          {restaurants.map(restaurant => 
            <RestaurantCard 
              restaurant={restaurant}
              key={restaurant.index}
            />
          )}
        </>
        :
        <h3>Please search for a Restaurant!</h3>
      }
    </>
  );
}

export default RestaurantSearch;