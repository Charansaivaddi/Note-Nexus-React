import React from 'react';
import "./Login.css"

const clear=()=>{
  document.getElementById('email').value='';
  document.getElementById('pword').value='';
}

const Login = () => {
  return (
      <div className='form'>
        <h1>Login</h1>
          <div>
            <input placeholder='Email id' type='email' id='email' required/><br/>
            <input placeholder='Password' type='password' id='pword' required/><br/>
            <button type='submit'onClick={clear}>Submit</button>
            <p>Don't have an account <a href='/signup'>Register</a></p>
          </div>
      </div>
  );
};

export default Login;
