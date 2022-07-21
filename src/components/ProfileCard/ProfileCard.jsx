import { Link } from "react-router-dom"
import styles from './ProfileCard.css'


const ProfileCard = (props) => {
  const profile = props.profile
  return(
    <div className="card">
      <div className="card-body">
        <div className="friends-avatar text-center" >
          {props.profile.profilePhoto ? 
          <img src={props.profile.profilePhoto} alt=""/>
        :
          <img src="/Burger.jpg" alt=""/>
        }
        </div>
        <div>
        <Link to={`/profiles/${props.profile.name}`} state={{profile}}>
          <h2 className="card-text text-center">
            {props.profile.name}
          </h2>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard