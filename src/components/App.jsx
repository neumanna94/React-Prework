import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
import { Switch, Route } from 'react-router-dom';
function App(){
  return (
    <div>
      <style jsx global>{`
        body {
          font-family: Helvetica;
        }
        .box {
          border: none;
          display: block;
          border-bottom: 2px solid #fff;
          margin-bottom: 10px;
        }
        .box:hover {
          border-bottom: 2px solid #ccc;
          outline: 0;
        }
        .color-toggle {
          background-color: green;
        }
        .color-toggle:hover {
          background-color: pink;
        }
        a {
          color: #888;
          text-decoration: none;
        }
      `}</style>
    <div style={{margin: '19px auto 0', width: 600}}>
        <a href="" target="_blank">
          <div className="box">
              <Header className="box color-toggle"/>
              <TicketList/>
              <MyStyledComponent/>
          </div>
        </a>
      </div>
  </div>
    // <div>
    //   <Header/>
    //   <TicketList/>
    //   <MyStyledComponent/>
    // </div>
  );
}

export default App;
