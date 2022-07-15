import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <h1>Foodie</h1>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/add">Add Post</NavLink>
          <NavLink to="/restaurants/new">Add Restaurant +</NavLink>
          <NavLink to="" onClick={handleLogout}>LOG OUT</NavLink>
          <NavLink to="/changePassword">Change Password</NavLink>
        </nav>
      :
        <nav>
          <h1>Foodie</h1>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </nav>
      }
    </>
  )
}

export default NavBar