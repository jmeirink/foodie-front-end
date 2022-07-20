import { useEffect, useState } from "react"
import { getProfileDetails } from "../../services/profileService"
import styles from './CommentCard.module.css'

const CommentCard = (props) => {
  const [profileDetails, setProfileDetails] = useState({})
  console.log(props.post);

  useEffect(() => {
    const fetchProfileDetails = async () => {
      const profileData = await getProfileDetails(props.profile)
      setProfileDetails(profileData)
    }
    fetchProfileDetails()
  }, [])

  return(
    <>
      <div>
        <h3>Hear what {props.comment.author} has to say!</h3>
        <p>{props.comment.comment}</p>

        {profileDetails.name === props.comment.author &&
          <button>Delete</button>
          // <button onClick={()=> setPostDetails()}>Delete</button>
        }
      </div>


    </>
  )
}

export default CommentCard