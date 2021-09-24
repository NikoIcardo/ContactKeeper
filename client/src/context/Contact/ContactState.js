import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../Types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: '1',
        name: 'Goku',
        email: 'spiritbomb@supremekai.com',
        phone: '111-111-1211',
        type: 'Z-Fighter',
      },
      {
        id: '2',
        name: 'Piccolo',
        email: 'HyperBeamCannon@KingKai.net',
        phone: '111-111-1221',
        type: 'Z-Fighter',
      },
      {
        id: '3',
        name: 'Krillin',
        email: 'DestructoDisk@MasterRoshi.gov',
        phone: '111-111-1231',
        type: 'Z-Fighter',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
