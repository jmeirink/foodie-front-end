import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { searchRestaurant } from '../../services/foodService';
import styles from './RestaurantSearch.css'

const RestaurantDetails = () => {
  const [restaurantDetails, setRestaurantDetails] = useState({})
  const { restaurantName } = useParams()

	useEffect(() => {
    const fetchRestaurantDetails = async () => {
      const restaurantData = await searchRestaurant(restaurantName)
      setRestaurantDetails(restaurantData)
    }
    fetchRestaurantDetails()
  }, [restaurantName])


  return (
    <>
      <h1>test restaurant deets</h1>
    </>
  )
}

export default RestaurantDetails;

