import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProfileDetails } from "../../services/profileService"

const ProfileDetails = () => {
  const [profileDetails, setProfileDetails] = useState({})
  const { profileId } = useParams()

  useEffect(() => {
    const fetchProfileDetails = async () => {
      const profileData = await getProfileDetails(profileId)
      setProfileDetails(profileData)
    }
    fetchProfileDetails()
  }, [profileId])

  return(
    
    <h1>{profileDetails.name}</h1>
    
  )
}

export default ProfileDetails