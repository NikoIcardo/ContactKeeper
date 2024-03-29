import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/Contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({ name: '', email: '', phone: '', type: 'personal' });
    }
  }, [contactContext, current]);

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
    if (current === null) {
      addContact(contact);
      setContact({ name: '', email: '', phone: '', type: 'personal' });
    } else {
      console.log(contact._id);
      updateContact(contact);
      clearCurrent();
    }
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
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
          value={current ? 'Update Contact' : 'Add Contact'}
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
