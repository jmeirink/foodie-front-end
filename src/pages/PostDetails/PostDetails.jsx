import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import * as postService from '../../services/postService'
import CommentSection from "../../components/CommentSection/CommentSection"
import styles from './PostDetails.module.css'

const PostDetails = (props) => {
  const [postDetails, setPostDetails] = useState() // <=====
  const location = useLocation()
  const navigate = useNavigate()

  const handleDeleteComment = async (postId, commentId) => {
    const updatedComments = await postService.deleteComment(postId, commentId)
    setPostDetails(updatedComments)
  }

  console.log('LOCATION', location)
  
  useEffect(() => {
    const fetchPostDetails = async () => {
      const postDetailsData = await postService.getPostDetails(location.state.post._id)
      console.log('POST DETAILS:', postDetailsData)
      setPostDetails(postDetailsData)
    }
    fetchPostDetails()
  }, [location.state.post._id])
  
  if (!postDetails) return <h1>LOADING</h1> // <=====
  const profile = postDetails.author
  
  return (  
      <>
      <div className="card">
      <Link className="text-link" to={`/profiles/${profile.name}`} state={{profile}}>
        <div className="card-body">
          <h5>{postDetails?.author.name} had a {postDetails?.item?.itemTitle} at {postDetails?.restaurant?.title}</h5>
          <h3>{postDetails?.review}</h3>
          <img src={postDetails?.photo} alt="" />
        </div>
        </Link>
      </div>

        <CommentSection postDetails={postDetails} setPostDetails={setPostDetails} handleDeleteComment={handleDeleteComment} profile={props.user?.profile} />
      </>
  )
}

export default PostDetails;