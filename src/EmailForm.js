import {toast} from 'react-toastify'
import emailjs from '@emailjs/browser'
import {useRef} from 'react'

function EmailForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_zoj329x", "contact_form", form.current, "y0DfgYROnru8eEtuD")
    .then(
      () => {
        toast.success('Message successfully sent!')
        window.setTimeout(() => {
          window.location.reload()
        }, 1000)
      },
      () => {
        toast.error('Failed to send the message, please try again')
      }
    )

  }


  return (
    <form ref={form} onSubmit={sendEmail} className='email-form'>
    <input type="text" name="user_name" placeholder='Your Name' className='email-form-input'
    />
    <input type="text" name="user_email" placeholder='Your Email Address' className='email-form-input'/>
    <textarea type="text" name="message" placeholder='Your Message' className='email-form-message'/>
    <button type="submit" value="Send" className='email-button'>Send Email</button>
  </form>
  )
}

export default EmailForm