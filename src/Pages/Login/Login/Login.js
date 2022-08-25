import React, { useState } from 'react'
import './Login.css'
import {ImGooglePlus3} from 'react-icons/im';
import {FaGithub} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle, useSignInWithGithub,useCreateUserWithEmailAndPassword, useUpdateProfile, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { async } from '@firebase/util';


const Login = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let loadings;
    let errorMSg;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [createUserWithEmailAndPassword,user2,loading2,error2] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error3] = useUpdateProfile(auth);
    const [
        signInWithEmailAndPassword,
        user3,
        loading3,
        error4,
      ] = useSignInWithEmailAndPassword(auth);

      //signUp
      const  signUp = async(event) => {
        event.preventDefault();
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName});
      }

      //login 
      const login = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
      }
      //redirect 
      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";
    // if (error || error1) {
    //     errorMSg = <div>
    //         <p>{error?.message} {error1?.message}</p>
    //     </div>
    //   }
      if (loading || loading1 || updating || loading3) {
        loadings =  (
            <div>
                <p>Loading....</p>
            </div>
        )
      }
      if (user || user1 || user2 || user3) {
        navigate(from, { replace: true });
      }
  return (
<div className='login-area'>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form onSubmit={signUp}>
					<label for="chk" aria-hidden="true">Sign up</label>
                    <p>{loadings}</p>
					<input onBlur={(event) => {setDisplayName(event.target.value)}} type="text" name="txt" placeholder="User name" required="" />
					<input onBlur={(event) => {setEmail(event.target.value)}} type="email" name="email" placeholder="Email" required="" />
					<input onBlur={(event) => {setPassword(event.target.value)}} type="password" name="pswd" placeholder="Password" required="" />
					<button onClick={signUp}>Sign up</button>
				</form>
			</div>
			<div class="login">
				<form onSubmit={login}>
					<label for="chk" aria-hidden="true">Login</label>
                   <p className='loading'> {loadings}</p>
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="password" placeholder="Password" required="" />
					<button>Login</button>
				</form>
                <div className='login-buttons'>
                        <button onClick={()=>{signInWithGoogle()}}><ImGooglePlus3/>Google Login</button>
                        <button onClick={()=>{signInWithGithub()}}><FaGithub/>Github Login</button>
                    </div>
                <p className='forgot'><Link to="#">Forgot Password?</Link></p>
			</div>
            
	</div>
</div>
  )
}

export default Login;