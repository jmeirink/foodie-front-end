import { Link } from "react-router-dom"


const ProfileCard = (props) => {
  return(
    <div className="card">
      <div className="card-body">
        <Link to={`/profiles/${props.profile._id}`}>
          <h2 className="card-text">
            {props.profile.name}
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard