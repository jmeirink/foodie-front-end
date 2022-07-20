import { useEffect, useState } from "react"
import { getProfileDetails } from "../../services/profileService"
import styles from './CommentCard.module.css'

const CommentCard = (props) => {
  const [profileDetails, setProfileDetails] = useState({})
  console.log('This is the comment id', props.comment._id)
  const postId = props.postDetails._id
  const commentId = props.comment._id

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
          // <button>Delete</button>
          <button onClick={()=> props.handleDeleteComment(postId, commentId)}>Delete</button>
        }
      </div>


    </>
  )
}

export default CommentCard