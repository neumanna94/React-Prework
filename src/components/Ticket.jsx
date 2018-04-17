import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: silver;
            color: white;
          }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issge}</em></p>
      <hr></hr>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired
};

export default Ticket;
