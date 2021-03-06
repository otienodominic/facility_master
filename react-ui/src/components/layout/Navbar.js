import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext/authContext'

const navLinks = [
  {
    title:'Home',
    path: '/'
  },
  {
    title: 'Facility Geolocator',
    path: '/gis'
  },
  {
    title: 'Help',
    path: '/help'
  },
  {
    title: 'Login',
    path: '/login'
  }
]

const Navbar = () => {
  const { user, logout, isAuthencated, clearErrors } = useContext(AuthContext)
  const [menuActive, setMenuActive] = useState(false)

  const onLogout = () => {
    logout()    
    clearErrors()
  }
 const authLink = ()=>{

 }
 const guestLink = ()=>{
   
}
  return (
    <nav className={`site-navigation ${menuActive && 'active'}`} role='navigation'>
    <span className="menu-title">Kenya Master Health Facility List</span>
    <div
            className="menu-content-container"
        >
            <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                    <Link to={link.path}>{link.title}</Link>
                </li>
                ))
            }
            </ul>
            <div className="menu-avatar-container">                
                {
                  isAuthencated ? <span className="menu-avatar-name">Hello, {user.name}</span>:null
                }
            </div>
        </div>
        <i 
            className="icon ionicons ion-ios-menu"
            onClick={(ev) => setMenuActive(!menuActive)}
        />
    </nav>
  )
}


export default Navbar
