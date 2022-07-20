import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function getProfileDetails(profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  return await res.json()
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

async function changeProfile(formData, profileId) {
  console.log(formData)
  const res = await fetch(`${BASE_URL}/${profileId}/update`,
  {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
  },
    body: JSON.stringify(formData)
  })
  return await res.json()
}

export { getAllProfiles, addPhoto, getProfileDetails, changeProfile }
