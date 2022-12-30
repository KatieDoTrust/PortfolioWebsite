import {toast} from 'react-toastify'
import emailjs from '@emailjs/browser'

function EmailForm() {

  const sendEmail = () => {

  }


  return (
    <form onSubmit={sendEmail} className='email-form'>
    <input type="text" name="user_name" placeholder='Your Name' className='email-form-input'
    />
    <input type="text" name="user_email" placeholder='Your Email Address' className='email-form-input'/>
    <textarea type="text" name="message" placeholder='Your Message' className='email-form-message'/>
    <button type="submit" value="Submit" className='email-button'>Send Email</button>
  </form>
  )
}

export default EmailForm