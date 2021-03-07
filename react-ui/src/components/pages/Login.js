import React, {useContext, useState, useEffect} from 'react'
import AuthContext from '../../context/authContext/authContext'

function Login(props) {
    const { login, isAuthencated, error, clearErrors } = useContext(AuthContext)
    useEffect(() => {
        if (isAuthencated) {
          props.history.push('/')
          clearErrors()
        } else {
          clearErrors()
        }
        // eslint-disable-next-line
      }, [isAuthencated, props.history])
      const [user, setUser] = useState({
        email: '',
        password: ''
      })
      const { email, password } = user

      // onchange in the DOM
      const onchange = e => {
        setUser({
          ...user,
          [e.target.name]: e.target.value
        })
        if (error !== null) { 
          
          clearErrors() }
      }
    const onsubmit =(e)=>{
        e.preventDefault()
        login({ email, password})
        if(error){}
        clearErrors()
    }
    return (
        <form className='login-form' onSubmit={onsubmit}>            
            <div className='container'>                
                <input type="text" placeholder="Enter Email" name="email" value={email} onChange={onchange} required />
               
                <input type="password" placeholder="Enter Password" name="password" value={password} onChange={onchange} required />

                <button type="submit" class="btn btn-primary btn-block btn-large">Login</button>
            </div>
            <div class="container" >            
            {error !== null && <button className="cancelbtn" type="button"  >{error} <span onClick={() => clearErrors()}>Cancel</span>
            </button>} 
            </div>
        </form>
    )
}

export default Login
