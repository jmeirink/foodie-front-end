import styles from './RestaurantCard.css'

const RestaurantCard = (props) => {
  return ( 
    <>
      <option 
        value={props.restaurant.name}>
        {props.restaurant.name} at {props.restaurant.location.address1}, {props.restaurant.location.zip_code}
      </option>
    </>
  )
}

export default RestaurantCard;