import React from 'react'
import "../styles/Register.scss"
const RegisterPage = () => {
  
  return (
    <div className='register'>
      <div className='register_content'>
        <form className='register_content_form'>
          <input
            placeholder='First Name'
            name="firstname"
            required
          />
          <input
            placeholder='Last Name'
            name="lastname"
            required
          />
          <input
            placeholder='Email'
            name="email"
            type='email'
            required
          />
          <input
            placeholder='Password'
            name="password"
            type='password'
            required
          />
          <input
            placeholder='Confirm Password'
            name="ConfirmPassword"
            type='password'
            required
          />
          <input
            id='image'
            name="profileImage"
            type='file'
            accept='image/*'
            required
            style={{ display: 'none' }}
          />
          <label htmlFor='image'>
            <img src="/assets/addImage.png" alt="add profile photo" />
            <p>Upload your Photo</p>
          </label>
          <button type='submit'>REGISTER</button>
        </form>
        <a href='/login'> Already have an account ? Login here</a>
      </div>

    </div>
  )
}

export default RegisterPage
