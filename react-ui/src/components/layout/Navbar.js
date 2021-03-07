import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext/authContext'

const navLinks = [
  {
    title:'Home',
    path: '/'
  },  
  {
    title: 'Help',
    path: '/help'
  },
  
]

const Navbar = () => {
  const { user, logout, isAuthencated, clearErrors } = useContext(AuthContext)
  const [menuActive, setMenuActive] = useState(false)

  const onLogout = () => {
    logout()    
    clearErrors()
  }
  const authLinks = (
    <Fragment>
      <li>Hello, {user && user.name}</li>
      <span className="sm-hide">|</span>
      <li><a href='#!' onClick={onLogout}><span className="sm-hide">Logout</span> <i className="fas fa-sign-out-alt"></i></a></li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <span className="sm-hide">|</span>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );
  return (
    <nav className={`site-navigation ${menuActive && 'active'}`} role='navigation'>
    <span className="menu-title">Kenya Health Information Resource</span>
    <div className="menu-content-container">
            <ul>
              { navLinks.map((link, index) => (
                  <li key={index}>
                      <Link to={link.path}>{link.title}</Link>
                  </li>
                  ))
              }
            </ul>
            <ul >                
                {
                  isAuthencated ? authLinks : guestLinks
                }
            </ul>
        </div>
        <i 
            className="icon ionicons ion-ios-menu"
            onClick={(ev) => setMenuActive(!menuActive)}
        />
    </nav>
  )
}


export default Navbar
