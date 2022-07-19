import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPostDetails } from "../../services/postService";

const PostDetails = (props) => {
  const [postDetails, setPostDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchPostDetails = async () => {
      const postDetailsData = await getPostDetails(location.state.post._id)
      setPostDetails(postDetailsData)
    }
    fetchPostDetails()
  }, [])
  
  return (  
      <>
        <h1>{postDetails.review}</h1>
      </>
  )
}

export default PostDetails;