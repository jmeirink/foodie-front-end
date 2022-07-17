import { Link } from 'react-router-dom'

const RestaurantCard = (props) => {
  return ( 
    <>
      <div className='card'>
        <img 
          src={props.restaurant.image_url} 
          alt="restaurant" 
          className='card-img-top'
          style={{width: "300px"}}
        />
        <div className="card-body">
          <h5 className="card-text">{props.restaurant.name}</h5>
          <p>{props.restaurant.location.address1}</p>
          <p>{props.restaurant.location.city}, {props.restaurant.location.state} {props.restaurant.location.zip_code}</p>
          


        </div>

      </div>

    </>
  )
}

export default RestaurantCard;