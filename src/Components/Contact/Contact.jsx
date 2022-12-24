import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-scroll';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b7pdi9q', 'template_h7sfm9c', form.current, 'td2tRP_JTD3r-mvm0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact" id='Contact'>
      <div className="contact-title">
          <h2>Contato</h2>
          <p>Entre em contato comigo para saber mais...</p>
          <p>Seriços que já realizei, projetos que estou criando e muito mais.</p>
          <p><RiWhatsappFill className='icon-whatsapp'/> - (11) 93145-1634 - WhatsApp pessoal</p>
          <p><RiWhatsappFill className='icon-whatsapp'/> - (11) 93585-2499 - WhatsApp para negócios</p>
          <p><MdAlternateEmail className='icon-email'/> - gonzalezmatheus01@gmail.com</p>
        </div>

        <div className="formulario">
          <form ref={form} onSubmit={sendEmail}>
            <label>Nome</label>
            <input type="text" name="user_name" placeholder='Digite o seu nome'/>
            <label>E-mail</label>
            <input type="email" name="user_email" placeholder='Digite o seu e-mail'/>
            <label>Mensagem</label>
            <textarea name="message" placeholder='Insira a sua mensagem...'/>
            <input type="submit" value="Enviar" />
          </form>
        </div>
    </div>

  
  )
}

export default Contact