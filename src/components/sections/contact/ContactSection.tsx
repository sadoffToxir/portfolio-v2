import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import svgIcons from '@assets/icons/index.tsx';
import { content } from '@constants/content';
import services from '@services/contact.ts';
import { validateForm } from '@utils/validation';

import './ContactSection.scss'

const ContactSection = () => {
  const { contact } = content;

  const fullName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();
    setErrors({});

    const data: Record<string, string> = {
      fullName: fullName.current!.value,
      email: email.current!.value,
      message: message.current!.value
    }

    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    services.sendEmail(data);

    setSuccess(true);
    setLoading(false);

    fullName.current!.value = '';
    email.current!.value = '';
    message.current!.value = '';
  }

  const socialLinks = [ 
    contact.textColumn.socialLinks.slice(0, Math.ceil(contact.textColumn.socialLinks.length / 2)), 
    contact.textColumn.socialLinks.slice(Math.ceil(contact.textColumn.socialLinks.length / 2), 6)]

  return (
    <section id="contact" className="contactSection">
      <div className='container'>
        <h2 className='text-emphasis-text mb-12 text-center'>Contact</h2>
        <div className='contactSection__content'> 
          <div className='flex-1'>
            <h3 className='mb-3'>{contact.textColumn.title}</h3>
            <p className='mb-12'>{contact.textColumn.description}</p>
            <div className='contactSection__socialColumns'>
              {
                socialLinks.map((linksCol, index) => 
                  <div key={`linksCol-${index}`} className='contactSection__socialLinks'>
                    {
                      linksCol.map((link, index) => 
                        <Link
                          rel="noreferrer"
                          to={link.url} 
                          target="_blank" 
                          className='contactSection__socialLink'
                          key={`link.title-${index}`} 
                        >
                          <div className='contactSection__socialIcon'>{link.icon}</div>
                          <div className='flex flex-col'>
                            <span className='font-bold'>{link.title}</span>
                            <div>
                              <span>{link.text}</span>
                            </div>
                          </div>
                        </Link>
                      )
                    }
                  </div>
                )
              }
            </div>
          </div>
          <div className='flex-1'>
            {
              success 
                ? <div className='contactSection__successfulSubmit'>
                  <div className='contactSection__successIcon'>
                    {svgIcons.check}
                  </div>
                  <h3>{contact.formColumn.successMessage}</h3>
                  <button className='button button-secondary flex gap-2 hover:gap-3' onClick={() => setSuccess(false)}>
                    <span>&#8592;</span> <span>Back to form</span>
                  </button>
                </div>
                : <form onSubmit={handleSubmit} className='contactSection__form'>
                  <div className='flex flex-col'>
                    <label htmlFor="fullName">Full Name</label>
                    <input ref={fullName} id='fullName' className={errors.fullName ? 'border-red-500' : ''} />
                    <span className='text-red-500'>{errors.fullName && errors.fullName}</span>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input ref={email} id='email' className={errors.email ? 'border-red-500' : ''} />
                    <span className='text-red-500'>{errors.email && errors.email}</span>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="message">Message</label>
                    <textarea ref={message} id='message' className={`min-h-52 ${errors.message && 'border-red-500'}`}/>
                    <span className='text-red-500'>{errors.message && errors.message}</span>
                  </div>
                  <button className={`button button-primary ${loading && 'loading'}`}>{loading ? '' : 'Submit'}</button>
                </form>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;