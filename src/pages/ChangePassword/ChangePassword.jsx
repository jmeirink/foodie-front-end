import { useState, useEffect } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'
import ChangeProfile from '../../components/ChangeProfile/ChangeProfile'
import styles from './ChangePassword.module.css'
import { getProfileDetails } from "../../services/profileService"

const ChangePassword = props => {
  const [message, setMessage] = useState([''])
  const [profileDetails, setProfileDetails] = useState({})
  
  const updateMessage = msg => {
    setMessage(msg)
  }

  useEffect(() => {
    const fetchProfileDetails = async () => {
      const profileData = await getProfileDetails(props.profile)
      setProfileDetails(profileData)
    }
    fetchProfileDetails()
  }, [])

  return (
    <main className={styles.container}>
      <h1>Hello {profileDetails.name}</h1>
      <img src={profileDetails?.profilePhoto} alt="" />
      <h1>Profile Settings</h1>
      <ChangeProfile profile={props.profile}/>
      <h1>Change Password</h1>
      <p>{message}</p>
      <ChangePasswordForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default ChangePassword
