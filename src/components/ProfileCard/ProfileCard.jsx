import { Link } from "react-router-dom"
import styles from './ProfileCard.module.css'

const ProfileCard = (props) => {
  const profile = props.profile

  return(
    <div className={styles.profileCard}>
      <div className="card-body">
        <Link to={`/profiles/${props.profile.name}`} state={{profile}}>
          <div className="friends-avatar text-center" >
            {props.profile.profilePhoto ? 
            <img src={props.profile.profilePhoto} alt=""/>
          :
            <img src="/Burger.jpg" alt=""/>
          }
          </div>
          <div>
            <h2 className={styles.profileName}>
              {props.profile.name}
            </h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard