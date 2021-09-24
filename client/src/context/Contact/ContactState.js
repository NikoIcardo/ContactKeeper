import React, { useReducer } from 'react';
import { uuid } from 'uuidv4';
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
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear Current Contact
  const clearCurrent = (contact) => {
    dispatch({ type: CLEAR_CURRENT, payload: contact });
  };
  // Update Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
