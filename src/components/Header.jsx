import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
  return (
    <h1>Help Queue</h1>
    <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>  );
}

export default Header;
