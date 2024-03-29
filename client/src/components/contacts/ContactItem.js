import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/Contact/contactContext';

const ContactItem = ({ contact }) => {
  const { deleteContact, setCurrent, clearCurrent } =
    useContext(ContactContext);

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type[0].toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            {' '}
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <p className="my-1">
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
