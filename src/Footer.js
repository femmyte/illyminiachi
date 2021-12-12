import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <div className='container-fluid'>
      <div className='footer'>
        <div className='form'>
          <input
            type='text'
            className='email'
            placeholder='ENTER EMAIL FOR UPDATES'
          />
          <label htmlFor='select'>
            <input type='checkbox' id='select' name='select' value='select' />I
            ACCEPT THE TERM
          </label>
          <button className='submit'>SUBMIT</button>
        </div>
        <div className='socials'>
          here
          <FontAwesomeIcon icon='check-square' size='lg' />
        </div>
      </div>
    </div>
  )
}

export default Footer
