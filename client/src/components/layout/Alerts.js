import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => {
      return (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          <icon className="fas fa-info-circle"></icon>
          {' ' + alert.msg}
        </div>
      );
    })
  );
};

export default Alerts;
