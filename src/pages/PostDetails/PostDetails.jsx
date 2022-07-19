import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services/postService";

const PostDetails = (props) => {
  const [postDetails, setPostDetails] = useState({})
  const { postId } = useParams()

  useEffect(() => {
    const fetchPostDetails = async () => {
      const postDetailsData = await getPostDetails(postId)
      setPostDetails(postDetailsData)
    }
    fetchPostDetails()
  }, [postId])
  
  return (  
      <>
        <h1>{postDetails.review}</h1>
        <h3>{postDetails.foodBeverage}</h3>
        <h3>{postDetails.item.itemTitle}</h3>
      </>
  )
}

export default PostDetails;