import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPostDetails } from "../../services/postService";
import * as postService from './services/postService'
import CommentSection from "../../components/CommentSection/CommentSection";
import styles from './PostDetails.module.css'

const PostDetails = (props) => {
  const [postDetails, setPostDetails] = useState() // <=====
  const location = useLocation()
  const navigate = useNavigate()

  const handleDeleteComment = async commentId => {
    postService.deleteComment(commentId)
    navigate('/')
  }

  console.log('LOCATION', location)

  useEffect(() => {
    const fetchPostDetails = async () => {
      const postDetailsData = await getPostDetails(location.state.post._id)
      console.log('POST DETAILS:', postDetailsData)
      setPostDetails(postDetailsData)
    }
    fetchPostDetails()
  }, [location.state.post._id])

  if (!postDetails) return <h1>LOADING</h1> // <=====
  
  return (  
      <>
        <h1>Post by {postDetails?.author.name}</h1>
        <h3>Item: {postDetails?.item?.itemTitle}</h3>
        <img src={postDetails?.photo} alt="" />
        <h3>Item Type: {postDetails?.foodBeverage}</h3>
        <h3>Review: {postDetails?.review}</h3>
        <CommentSection postDetails={postDetails} setPostDetails={setPostDetails} profile={props.user.profile} handleDeleteComment={handleDeleteComment} />
      </>
  )
}

export default PostDetails;