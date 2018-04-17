import React from 'react';

function MyStyledComponent(props){
  var myStyledComponentStyles = {
    backgroundColor:  '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  };
  return (
    <div style={myStyledComponentStyles}>
      <h1> Hey, this is a Styled component </h1>
      <h4> Pretty cool, right?</h4>
        <p className="red-text">only this paragraph will get the style </p>
        <style jsx>{`
            .red-text {
              color: red;
            }
        `}</style>
    </div>
  );
}

export default MyStyledComponent;
