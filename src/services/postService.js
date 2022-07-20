import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`

async function create(postData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(postData)
  })
  return await res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return await res.json()
}

async function deletePost(postId) {
  const res = await fetch(`${BASE_URL}/${postId}`, {
    method: "DELETE",
    headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  return await res.json()
}

async function updatePost(postData) {
  const res = await fetch(`${BASE_URL}/${postData._id}`, {
    method: "PUT",
    headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(postData)
  })
  return await res.json()
}

async function addPhoto(photoData, postId) {
  const res = await fetch(`${BASE_URL}/${postId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
	return await res.json()
}

async function getPostDetails(postId) {
  const res = await fetch(`${BASE_URL}/${postId}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return await res.json()
}

async function addComment(postId, formData) {
  console.log(formData)
  const res = await fetch(`${BASE_URL}/${postId}/comments`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(formData)
  })
  return await res.json()
}

async function deleteComment(commentId) {
  const res = await fetch(`${BASE_URL}/delete-comment/${commentId}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type' : 'application/json'
    }
  })
  return await res.json()
}

export { 
  create,
  getAll,
  deletePost,
  updatePost,
  addPhoto,
  getPostDetails,
  addComment,
  deleteComment
}
