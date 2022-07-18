import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services/postService";

const PostDetails = (props) => {
  const [postDetails, setPostDetails] = useState({})
  const { postId } = useParams()

  useEffect(() => {
    const fetchPostDetails = async () => {
      const postData = await getPostDetails(postId)
      setPostDetails(postData)
    }
    fetchPostDetails()
  }, [postId])
  
  return (  
      <>
        <h1>{postDetails.review}</h1>
      </>
  )
}

export default PostDetails;