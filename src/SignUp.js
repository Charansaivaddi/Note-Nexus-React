import React from 'react';
import "./SignUp.css"

const clear=()=>{
  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('pword').value='';
}

constructor(props);

const SignUp = () => {
  return (
      <div className='form'>
        <h1>SignUp</h1>
          <div>
            <input placeholder='Name' type='name' id='name' required/><br/>
            <input placeholder='Email id' type='email' id='email' required/><br/>
            <input placeholder='Password' type='password' id='pword' required/><br/>
            <button type='submit'onClick={clear}>Submit</button>
            <p>Already have an Account <a href='/login'>Login</a></p>
          </div>
      </div>
  );
};

export default SignUp;
