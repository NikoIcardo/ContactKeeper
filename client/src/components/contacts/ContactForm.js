import React, { useState, useContext } from 'react';
import ContactContext from '../../context/Contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({ name: '', email: '', phone: '', type: 'personal' });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="text-primary">Add Contact</h2>
      <h5>Name</h5>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter a Name for the Contact."
        onChange={onChange}
      />
      <h5>Email</h5>
      <input
        type="text"
        name="email"
        value={email}
        placeholder="Enter an Email for the Contact."
        onChange={onChange}
      />
      <h5>Phone</h5>
      <input
        type="text"
        name="phone"
        value={phone}
        placeholder="Enter a Phone Number for the Contact."
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{'  '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Add Contact"
        />
      </div>
    </form>
  );
};

export default ContactForm;
