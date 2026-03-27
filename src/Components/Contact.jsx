import './Contact.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[message, setMessage] = useState("")
const onSubmit = (e) => {
  e.preventDefault();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all the fields");
    return;
  }

  const templateParams = {
    name: name,
    email: email,
    message: message
  };

  emailjs.send(
    "service_vyf31l4",
    "template_orfq5hs",
    templateParams,
    "e8kUYadi1sF_b1BYm"
  )
  .then(() => {
    alert("Message sent successfully ✅");
    setName("");
    setEmail("");
    setMessage("");
  })
  .catch((error) => {
    console.log(error);
    alert("Failed to send message ❌");
  });
};
    return (
        <section id='contact'>
        <h1>Contact me</h1>
        
        <form onSubmit={onSubmit}>
       <div className='input-field'>
            
        <input 
        type='text'
        value={name}
        placeholder='Name:'
        onChange={(e) => setName(e.target.value)}
        />
         <input 
        type='email'
        value={email}
        placeholder='Email:'
        onChange={(e) => setEmail(e.target.value)}
        />
         <textarea
        value={message}
        placeholder='Message:'
        onChange={(e) => setMessage(e.target.value)}
        />
        </div>
        <button type='submit' >Submit</button>
        </form>
        <div className='contact-links'>
    <a href="mailto:praveensajiya01@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
    <a href="https://linkedin.com/in/sana-praveen-153889272" target="_blank" rel="noreferrer"><FaLinkedin /></a>
    <a href="https://github.com/SANAali0786" target="_blank" rel="noreferrer"><FaGithub /></a>
</div>
        </section>
    )
}
export default Contact;