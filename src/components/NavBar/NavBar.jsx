import { NavLink } from 'react-router-dom'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>

      {user ?
        <nav className='sidebar'>

          <h1 className='logo'>Foodie</h1>

          <div className='sidebarOption'>
          <h2><span className="material-symbols-outlined">home</span>Home</h2>
          </div>

          <div className='sidebarOption'>
          <h2><span className="material-symbols-outlined">person</span>Profile</h2>
          </div>

          <div className='sidebarOption'>
          <NavLink to="/profiles">
          <h2><span className="material-symbols-outlined">group</span>Friends</h2>
          </NavLink>
          </div>

          <div className='sidebarOption'>
          <NavLink to="/">
          <h2><span className="material-symbols-outlined">list</span>Posts</h2>
          </NavLink>
          </div>

          <div className='sidebarOption'>
          <NavLink to="/add">
          <h2><span className="material-symbols-outlined">add</span>Add Post</h2>
          </NavLink>
          </div>

          <div className='sidebarOption'>
          <NavLink to="/restaurants/new">
          <h2><span className="material-symbols-outlined">restaurant</span>Add Restaurant +</h2>
          </NavLink>
          </div>

          <div className='sidebarOption'>
          <NavLink to="/changePassword">
          <h2><span className="material-symbols-outlined">settings</span>Change Password</h2>
          </NavLink>
          </div>

          <div className='sidebarOption'>
          <NavLink to="" onClick={handleLogout}>
          <h2><span className="material-symbols-outlined">logout</span>Logout</h2>
          </NavLink>
          </div>

        </nav>
      :
        <nav className='sidebar'>
          <h1 className='logo'>Foodie</h1>

          <div className='sidebarOption'>
          <NavLink to="/login">
          <h2><span className="material-symbols-outlined">login</span>Log In</h2>
          </NavLink>
          </div>

          <div className='sidebarOption'>
          <NavLink to="/signup">
          <h2><span className="material-symbols-outlined">exit_to_app</span>Sign Up</h2>
          </NavLink>
          </div>

        </nav>
      }
    </>
  )
}

export default NavBar