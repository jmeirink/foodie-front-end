import { Link } from "react-router-dom"
import styles from './ProfileCard.css'


const ProfileCard = (props) => {
  const profile = props.profile
  return(
    <div className="card">
      <div className="card-body">
        <Link to={`/profiles/${props.profile.name}`} state={{profile}}>
          <h2 className="card-text">
            {props.profile.name}
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard