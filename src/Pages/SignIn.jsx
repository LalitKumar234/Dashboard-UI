import React, { useState } from 'react'
import './Page.css'
import { AppleIcon, GoogleIcon } from '../Assets'
import { auth, provider } from "../firebase.config"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [isAuth, setIsAuth] = useState()
    const navigate = useNavigate()
    const signIn = () => {
        signInWithPopup(auth, provider).then((result) => {
          setIsAuth(true)
          localStorage.setItem("isAuth", true);
          navigate("/")
          localStorage.setItem("userName", JSON.stringify(result.user.displayName))
          localStorage.setItem("photoURL", JSON.stringify(result.user.photoURL))
        })
      }

    return (
        <div className='signin-container fx'>
            <div className="left-section fx-cnt">
                <h1>Board.</h1>
            </div>
            <div className='right-section fx-cnt'>
                <div className='fx fx-d-col gap-25'>
                    <div>
                        <h2>Sign In</h2>
                        <p>Sign in to your account</p>
                    </div>
                    <div className="fx gap-25">
                        <button className='social-logins fx al-cnt gap-10' onClick={signIn}><GoogleIcon />Sign in with Google</button>
                        <button className='social-logins fx al-cnt gap-10'><AppleIcon />Sign in with Apple</button>
                    </div>
                    <form className="signin-form fx fx-d-col">
                        <div className='fx fx-d-col gap-10 mb-20'>
                            <label htmlFor="">Email address</label>
                            <input type="email" name="" id="" placeholder='ex: johndoe@gmail.com' />
                        </div>
                        <div className='fx fx-d-col gap-10 mb-20'>
                            <label htmlFor="">Password</label>
                            <input type="password" name="" id="" placeholder='Password' />
                        </div>
                        <span className='btn-blue-text mb-20'>Forgot password?</span>
                        <button className='primary-btn'>Sign In</button>
                    </form>
                    <div className='fx-cnt register'>Don’t have an account?<span className='btn-blue-text'>Register here</span></div>
                </div>
            </div>
        </div>
    )
}

export default SignIn