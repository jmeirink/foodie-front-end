import { Link } from "react-router-dom"


const ProfileCard = (props) => {
  return(
    <div className="card">
      <div className="card-body">
        <Link to={`/profiles/${props.profile.name}`} profile={props.profile}>
          <h2 className="card-text">
            {props.profile.name}
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard