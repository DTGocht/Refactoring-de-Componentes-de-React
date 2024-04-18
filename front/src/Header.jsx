import React from 'react';

const Header = () => {
  const textStyle = {
    display: "flex",
    justifyContent: "center",
    fontStyle: "bold",
    backgroundColor: "black",
    color: "white", 
    
    
    
  }
  return(<h1 style={textStyle}>Notes</h1>);
};

export default Header;