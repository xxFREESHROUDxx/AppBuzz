import React from "react";
import './Login.css';
import { Link } from "react-router-dom";
import { auth} from "../firebase/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";


const Login = (props) => {
  
  const {
    email, setEmail, password, setPassword
  } = props;
  let navigate = useNavigate()

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      localStorage.setItem('isLoggedIn', 'true')
      navigate('/')
    }).catch((err) => {
      // console.log(err.code);
      // Validation for email and password 
      switch (err.code) {
        case "auth/invalid-email":
          alert('Invalid Email! Please check your email')
          break;
        case "auth/user-not-found":
          alert('No user exists! Signup Now!')
          break;
        case "auth/wrong-password":
          alert('Wrong Password! Please remember your password')
          break;
        case "auth/internal-error":
          alert('Enter your password please!')
          break;
      }
    });

  }

  return (
    <section className="login">
      <div className="loginContainer">
        <h3 className="alert alert-warning" align="center">Sign In</h3>
        <label>Email</label>
        <input type="text" placeholder="enter your email" required value={email} onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="enter your password" required value={password} onChange={e => setPassword(e.target.value)} />
        <div className="btnContainer">
          <button onClick={handleLogin} >Sign In</button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
