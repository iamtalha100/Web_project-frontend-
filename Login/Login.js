import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <div id="login-box">
    <div class="left">
      <h1>Sign In</h1>
      
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Password" />
      
      <input type="submit" name="signin_submit" value="Sign in" />
      <br/>
      <Link to='/register'><span className='already'>Not have account</span></Link>
      <br/>
      <br/>
      <Link to='/producto'>
      <button>
        Check Products
      </button>
      </Link>
    </div>
    
    <div class="right">
      <span class="loginwith">Sign in with<br />social network</span>
      
      <button class="social-signin facebook">Log in with facebook</button>
      <button class="social-signin twitter">Log in with Twitter</button>
      <button class="social-signin google">Log in with Google+</button>
    </div>
    <div class="or">OR</div>
  </div>

    )
}

export default Login
