import { useRef } from 'react';

import BaseInput from '@components/base/input/BaseInput';
import BaseTextarea from '@components/base/textarea/BaseTextarea';

import './ContactSection.scss'

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event.currentTarget);
    
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <section id="contact" className="contactSection">
      <div className='container'>
        <h2 className='text-emphasis-text mb-5'>Contact</h2>
        <div className='skillsSection__content'> 
          <div className='contactSection__leftContent'>
            <h3>Get in touch</h3>
            <p>Feel free to reach out to me if you have any questions or want to work together.</p>
            <form onSubmit={handleSubmit} ref={formRef} className='contactSection__form'>
              <div className='contactSection__inputGroup'>
                <BaseInput id='fullName' label='Full Name'/>
              </div>
              <div className='contactSection__inputGroup'>
                <BaseInput id='email' label='Email '/>
              </div>
              <div className='contactSection__inputGroup'>
                <BaseTextarea id='message' label='Message' />
              </div>
              <button className='btn btn-primary' type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;