import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getProfileDetails } from "../../services/profileService"
import styles from './ProfileDetails.module.css'
import PostCard from "../../components/PostCard/PostCard"
import * as postService from '../../services/postService'


const ProfileDetails = (props) => {
  const location = useLocation()
  const [profileDetails, setProfileDetails] = useState({})
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const fetchProfileDetails = async () => {
      const profileData = await getProfileDetails(location.state.profile._id)
      setProfileDetails(profileData)
    }
    fetchProfileDetails()
  }, [])
  
  useEffect (() => {
    const fetchAllPosts = async () => {
      const postData = await postService.getAll()
      setPosts(postData)
    }
    fetchAllPosts()
  },[])
  
  const ownedPosts = posts.filter(post => post.author._id === profileDetails._id)
  
  return(
    <div>
      <h1>{profileDetails.name}</h1>
      <div>
        {profileDetails.bio ? 
          <h2>"{profileDetails.bio}"</h2>
        :
          <h2>This User Has No Bio</h2>
        }
      </div>
      <div>
        {profileDetails.profilePhoto ? 
          <img src={profileDetails.profilePhoto} alt=""/>
        :
          <img src="/Burger.jpg" alt=""/>
        }
      </div>
      <div className="container">
        <h1>Posts</h1>
        {ownedPosts.map(post =>
          <PostCard 
            key={post._id} 
            post={post} 
            handleDeletePost={props.handleDeletePost}
          />
        )}
        </div>
    </div>
  )
}

export default ProfileDetails