import React from 'react'
import { auth, provider} from '../segs-firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login({setIsAuth}) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className='loginPage'>
      <p>Sign in to your account</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Login</button>
    </div>
  )
}

export default Login
