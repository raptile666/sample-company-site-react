import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {PhoneAndroid, MailOutline} from '@mui/icons-material';
import '../styles/Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9syeaqj', 'template_omprk5r', form.current, 'S9ALKpcTjRGuSEkCv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <motion.div className='contactMain'
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    >
      <div className='textdiv'>
        <h1>Contact</h1>
        <h4><PhoneAndroid /> Mobil</h4>
        <a href="tel:+36123456789">+36 12 345 6789</a>
        <h4><MailOutline /> E-Mail</h4>
        <a href="mailto:john@sample.sam">john@sample.sam</a>
      </div>

      <div className='formdiv'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='Name' required/>
          <input type="email" name="user_email" placeholder='E-Mail' required/>
          <textarea name="message" placeholder='Message' rows={4} />
          <input type="submit" value="Send" required/>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact