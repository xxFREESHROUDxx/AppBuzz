import React, { useEffect } from "react";
import './Register.css';
import validator from 'validator'
import { Link } from "react-router-dom";
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = (props) => {
  const {
    username, setUsername, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword
  } = props;

  const clearInputs = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  useEffect(() => {
    clearInputs();
  }, [])

  const validateUsername = () => {
    let isValid = true;
    if (username === '') {
      isValid = false;
    }
    return isValid;
  }

  const validatePassword = () => {
    let isValid = true;
    if (password === '' || confirmPassword === '') {
      isValid = false;
    }
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false;
      }
    }
    return isValid;
  }

  const validateEmail = () => {
    let isValid = true;
    if (validator.isEmail(email)) {
      isValid = true;
    }
    else {
      isValid = false;
    }
    return isValid;
  }

  const handleRegister = () => {
    if (validatePassword() && validateUsername()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(ref => {
          // console.log(ref);
          alert('Account is successfully created!')
          clearInputs();
        })
        .catch(err => {
          // console.log(err.code);
          alert(err.message)
        })
      // Storing data inside the firebase realtime database
      if (username && email && password && confirmPassword) {
        if (validatePassword() && validateEmail()) {
          const res = fetch(
            "https://project-login-form-default-rtdb.firebaseio.com/users.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username, email,
              }),
            }
          )
          if (res) {
            alert('user data is stored in firebase!')
          }
          else {
            alert('Something went wrong while storing user data!')
          }
        }
      }
    }
    else {
      if (!validatePassword()) {
        alert("Password doesn't match")
      }
      else {
        if (!validateUsername()) {
          alert('Username field should not be empty!')
        }
      }
    }

    // let userData = { username, email };
    // let user = auth.currentUser;
    // // console.log(user);
    // set(ref(db, 'users/' + user), {
    //   username: username,
    //   email: email,
    // });
  }

  return (
    <section className="login">
      <div className="loginContainer">
        <h3 className="alert alert-warning" align="center">Sign Up</h3>
        <label>Username</label>
        <input type="text" autoFocus required value={username} onChange={e => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="text" required value={email} onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
        <label>Confirm Password</label>
        <input type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <div className="btnContainer">
          <button onClick={handleRegister} >Sign Up</button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
