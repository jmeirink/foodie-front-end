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
  const [photoData, setPhotoData] = useState({})

  const profileId = props.profile 

  const handleProfileChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangeProfilePhoto = (e) => {
    setPhotoData({ photo: e.target.files[0] })
  }

  const handleAddProfileData = async (formData, photo, profileId) => {
    const profileChange = await profileService.changeProfile(formData, profileId)
    if (photo) {
      props.profile.photo = await ProfilePhotoHelper(photo, profileChange._id)
    }
    navigate('/')
  }

  const ProfilePhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await profileService.addPhoto(photoData, id)
  }

  const handleProfileSubmit = async e => {
    e.preventDefault()
    try {
      handleAddProfileData(formData, photoData.photo ,profileId)
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
          className={styles.profileInput}
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
          className={styles.profileInput}
          type="text"
          autoComplete="off"
          id="bio-input"
          value={bio}
          name="bio"
          onChange={handleProfileChange}
        />
      </div>
      <div className={styles.inputContainer}>
					<label htmlFor="profile-photo-upload" className="form-label">
						Upload Profile Photo
					</label>
					<input
						type="file"
						className="form-control"
						id="profile-photo-upload"
						name="photo"
						onChange={handleChangeProfilePhoto}
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
