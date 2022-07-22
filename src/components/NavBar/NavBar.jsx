import { NavLink } from 'react-router-dom'
import styles from './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='sidebar'>
          <h1 className='logo'>Foodie</h1>
          <div className='sidebarOption'>
          <NavLink className='text-link' to="/">
            <h2>
              <span className="material-symbols-outlined">home
              </span>Home
            </h2>
          </NavLink>
          </div>
          <div className='sidebarOption'>
          <NavLink className='text-link' to="/changePassword">
            <h2>
              <span className="material-symbols-outlined">person
              </span>Profile Settings
            </h2>
          </NavLink>
          </div>
          <div className='sidebarOption'>
          <NavLink className='text-link' to="/profiles">
            <h2>
              <span className="material-symbols-outlined">group
              </span>Friends
            </h2>
          </NavLink>
          </div>
          <div className='sidebarOption'>
            <NavLink className='text-link' to="" onClick={handleLogout}>
              <h2>
                <span className="material-symbols-outlined">logout</span>Logout
              </h2>
            </NavLink>
          </div>
        </nav>
      :
        <nav className='sidebar'>
          <h1 className='logo'>Foodie</h1>
          <div className='sidebarOption'>
            <NavLink className='text-link' to="/login">
              <h2>
                <span className="material-symbols-outlined">login</span>Log In
              </h2>
            </NavLink>
          </div>
          <div className='sidebarOption'>
          <NavLink className='text-link' to="/signup">
          <h2><span className="material-symbols-outlined">exit_to_app</span>Sign Up</h2>
          </NavLink>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar