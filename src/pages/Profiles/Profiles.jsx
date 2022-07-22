import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { Link } from 'react-router-dom'
import styles from './Profiles.module.css'

const Profiles = (props) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <div className="container text-center">
        <h1>Friends</h1>
        {profiles.length ? 
          <>
          <div className="container text-center">
            {profiles.map(profile =>
                <ProfileCard
                  profile={profile}
                  key={profile._id}
                />
            )}
            </div>
          </>
        :
          <p>No profiles yet</p>
        }
      </div>
    </>
  )
}

export default Profiles