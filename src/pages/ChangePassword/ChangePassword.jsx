import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'
import ChangeProfile from '../../components/ChangeProfile/ChangeProfile'
import styles from './ChangePassword.module.css'

const ChangePassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <h1>Profile Settings</h1>
      <ChangeProfile profile={props.profile}/>
      <h1>Change Password</h1>
      <p>{message}</p>
      <ChangePasswordForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default ChangePassword
