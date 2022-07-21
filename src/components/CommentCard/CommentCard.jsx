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
      <div className="comment-card">
        <div className="comment">
        <h5>{props.comment.author}</h5>
        <h3>{props.comment.comment}</h3>
        </div>

        {profileDetails.name === props.comment.author &&
        <div className="comment-card-footer">
          <button className="btn delete" onClick={()=> props.handleDeleteComment(postId, commentId)}>
          <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
        }

      </div>


    </>
  )
}

export default CommentCard