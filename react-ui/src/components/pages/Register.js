import React, {useState, useContext} from 'react'
import AuthContext from '../../context/authContext/authContext'
import axios from 'axios'
function Register(props) {
    console.log(props)
    //name, email,password, passwordCheck
    const { register, error, clearErrors, setError } = useContext(AuthContext)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        passwordCheck: ''
      })
      //Handle local errors
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onChangeName = (e) => {
    const username = e.target.value;
    setName(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangePasswordCheck = (e) => {
    const passwordCheck = e.target.value;
    setPasswordCheck(passwordCheck);
  };
  const onsubmit = (e) => {

    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    axios.post("/api/register", {name, email,password, passwordCheck})
     .then(
        (response) => {
          setMessage(response.data.msg);
          setSuccessful(true);
          props.history.push('/login')
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.msg) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );   
  };
    return (
        <form onSubmit={onsubmit} >
            <div className='container'>
                <p>Please fill in this form to create an account</p>
                <label for="name">Full Name</label>
                <input type="text" placeholder="Enter Your Name" name="name" value={name} onChange={onChangeName} required />
                <label for="email">Email</label>
                <input type="text" placeholder="Enter Email" name="email" value={email} onChange={onChangeEmail} required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={password} onChange={onChangePassword} required />

                <label for="passwordCheck">Repeat Password</label>
                <input type="password" placeholder="Repeat Password" name="passwordCheck" value={passwordCheck} onChange={onChangePasswordCheck}  required />
                <div class="clearfix">
                {/* <button type="button" class="cancelbtn">Cancel</button> */}
                <button type="submit" class="signupbtn">Sign Up</button>
                </div>
            </div> 
            {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}  
          {error && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {error}
              </div>
            </div>
          )}         
        </form>
    )
}

export default Register
