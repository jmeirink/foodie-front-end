import { useState, useEffect} from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddPost from './pages/AddPost/AddPost'
import * as postService from './services/postService'
import PostList from './pages/PostList/PostList'
import RestaurantSearch from './pages/RestaurantSearch/RestaurantSearch'
import EditPost from './pages/EditPost/EditPost'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  useEffect (() => {
    const fetchAllPosts = async () => {
      const postData = await postService.getAll()
      setPosts(postData)
    }
    fetchAllPosts()
  },[])

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddPost = async (postData, photo) => {
    const newPost = await postService.create(postData)
    setPosts([...posts, newPost])
    if (photo) {
      newPost.photo = await postPhotoHelper(photo, newPost._id)
    }
    navigate('/')
  }

  const handleDeletePost = async postId => {
    const deletedPost = await postService.deletePost(postId)
    const newPostsArray = posts.filter(post => post._id !== deletedPost._id)
    setPosts(newPostsArray)
    navigate('/')
    
  }

  const handleUpdatePost = async (postData) => {
    const updatedPost = await postService.updatePost(postData)
    // map state to new array
    const newPostsArray = posts.map(post => post._id === updatedPost._id ? updatedPost : post)
    // use new array to set new state
    setPosts(newPostsArray)
    navigate('/')
    
  }

  const postPhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await postService.addPhoto(photoData, id)
  }
  

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <div className='content'>
      <Routes>
        <Route path="/add" element={ <AddPost handleAddPost={handleAddPost} RestaurantSearch={<RestaurantSearch />}/>} />

        <Route path="/restaurants/new" element={user ? <RestaurantSearch /> : <Navigate to="/login" />}/>

        <Route path="/edit" element={<EditPost handleUpdatePost={handleUpdatePost}  />} />

        <Route path="/" element={<PostList user={user} posts={posts} handleDeletePost={handleDeletePost} handleAddPost={handleAddPost} />} />

        <Route path="/signup" element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}/>

        <Route path="/login" element={<Login handleSignupOrLogin={handleSignupOrLogin} />}/>

        <Route path="/profiles" element={user ? <Profiles /> : <Navigate to="/login" />}/>

        <Route path="/profiles/:profileName" element={user ? <ProfileDetails /> : <Navigate to="/login" />}/>
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      </div>
    </>
  )
}

export default App
