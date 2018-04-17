import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Case 2'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Case 3'
  }

]

function TicketList(){

  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
