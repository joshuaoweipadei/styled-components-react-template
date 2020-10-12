import React from 'react'
import {
  ContactContanier,
  ContactWrap,
  ContactSubscribe,
  ContactSubscribeHeader,
  ContactSubscribeText,
  ContactSubscribeInput,
  ContactSubscribeBtn,
  ContactForm,
  ContactFormHeader,
  ContactFormField,
  ContactFormInput,
  ContactFormTextarea,
  ContactFormSubmitBtn
} from './ContactElement'

const Contact = () => {
  return (
    <ContactContanier id="contact">
      <ContactWrap>
        <ContactSubscribe>
          <ContactSubscribeHeader>Subscribe to Get Notified!</ContactSubscribeHeader>
          <ContactSubscribeText>Sign up to receive updates and fresh news from us.</ContactSubscribeText>
          <ContactSubscribeInput type="email" placeholder="Enter your email" />
          <ContactSubscribeBtn>Subscribe</ContactSubscribeBtn>
        </ContactSubscribe>
        <ContactForm>
          <ContactFormHeader>Contact with us</ContactFormHeader>
          <ContactFormField>
            <ContactFormInput placeholder="Name" />
            <ContactFormInput placeholder="Email" />
          </ContactFormField>
          <ContactFormTextarea placeholder="Your Message" />
          <ContactFormSubmitBtn>Send Message</ContactFormSubmitBtn>
        </ContactForm>
      </ContactWrap>
    </ContactContanier>
  )
}

export default Contact
