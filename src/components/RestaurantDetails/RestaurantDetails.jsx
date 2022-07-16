import { useState, useEffect } from 'react';
import { searchRestaurant } from '../../services/foodService';

const RestaurantDetails = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect (() => {
    const fetchAllRestaurants = async () => {
      const restaurantData = await searchRestaurant.getAll()
      setRestaurants(restaurantData)
    }
    fetchAllRestaurants()
  },[])


  return (
    <>
      <h1>test restaurant deets</h1>
    </>
  )
}

export default RestaurantDetails;

