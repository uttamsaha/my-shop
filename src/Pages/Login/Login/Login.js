import React from 'react'
import './Login.css'
import {ImGooglePlus3} from 'react-icons/im';
import {FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
<div className='login-area'>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required="" />
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Sign up</button>
				</form>
			</div>
			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Login</button>
                    <div className='login-buttons'>
                        <button><ImGooglePlus3/>Google Login</button>
                        <button><FaGithub/>Github Login</button>
                    </div>
				</form>
                <p className='forgot'><Link to="#">Forgot Password?</Link></p>
			</div>
            
	</div>
</div>
  )
}

export default Login;