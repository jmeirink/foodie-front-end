import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './ChangeProfile.module.css'
import * as profileService from '../../services/profileService'

const ChangeProfile = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
  })
  const profile = props.profile 

  const handleProfileChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleProfileSubmit = async e => {
    e.preventDefault()
    try {
      await profileService.changeProfile(formData)
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, bio } = formData

  const isFormInvalid = () => {
    return !(name && bio)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleProfileSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>
          Preferred Name
        </label>
        <input
          type="text"
          autoComplete="off"
          id="name-input"
          value={name}
          name="name"
          onChange={handleProfileChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="bio" className={styles.label}>
          Bio
        </label>
        <input
          type="text"
          autoComplete="off"
          id="bio-input"
          value={bio}
          name="bio"
          onChange={handleProfileChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <button disabled={isFormInvalid()} className={styles.button}>
          Save Profile Changes
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default ChangeProfile
