import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getProfileDetails } from "../../services/profileService"

const ProfileDetails = (props) => {
  const location = useLocation()
  const [profileDetails, setProfileDetails] = useState({})

  useEffect(() => {
    const fetchProfileDetails = async () => {
      const profileData = await getProfileDetails(location.state.profile._id)
      setProfileDetails(profileData)
    }
    fetchProfileDetails()
  }, [])

  return(
    
    <h1>{profileDetails.name}</h1>
    
  )
}

export default ProfileDetails