import React, { useState } from 'react';
import { Row,Col } from 'react-bootstrap';
import headerImg from "../assets/img/header-img.svg";

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process or submit the form data here
    console.log('Form submitted:', { firstName, lastName, email, phoneNumber, message });
    // You can perform further actions such as making an API request or updating state.
  };

  return (

    <section className='contact-full'>
   <Row>
    <Col>
    <img src={headerImg} alt="Header Img"/>
    </Col>
    <Col>
    
    <form onSubmit={handleSubmit} className='contact'>
    <Row><h2>Contact Me</h2></Row>
     <Row>
        <Col>
     <div>    
      <input className='FName'
        placeholder='FirstName'
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      </Col>
      <Col>
      <div>
        
        <input className='LName'
          placeholder='Lastname'
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      </Col>
      </Row> 
      <Row>
      <Col>
      <div>
        <input className='email'
        placeholder='E-mail'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      </Col>
      <Col>
      <div>
        
        <input className='phonenum'
        placeholder='Phone Number'
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      </Col>
      </Row>
      <div>
        
        <textarea className='message'
        placeholder='Message'
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    </Col>
   </Row>
   </section>
  );
}

export default ContactForm;