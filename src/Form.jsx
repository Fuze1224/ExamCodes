import React, { useContext } from 'react'
import { AuthContext } from './Context'
import $, { event } from 'jquery'

const Form = () => {

  const {registered, setRegistered} = useContext(AuthContext)

  const logged = (event) =>{

    event.preventDefault();
    
    let log = $('.log').val();
    let pas = $('.pas').val();
    if (log == "admin" && pas == "123") {
      setRegistered(true);
      console.log('hello world');
    }
    else{
      $('.reg').css('color', 'red')
      $('.reg').html('Your Login or Password is incorrect');
    }

  }

  return (
    <div className='m-20'>
        <form onSubmit={logged}>
          <h1 className='reg text-5xl mb-5'>Registration</h1>
            <input type="text" placeholder='Login' className='log pl-2'/>
            <br /><br />
            <input type="password" placeholder='Password' className='pas pl-2'/>
            <br /><br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form