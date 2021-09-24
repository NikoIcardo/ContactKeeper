import React, { useContext, Fragment } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/Contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </Fragment>
  );
};

export default Contacts;
