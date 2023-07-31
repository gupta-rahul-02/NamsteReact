import  React from'react'
import  ReactDOM  from 'react-dom';
  

const heading = React.createElement("h1", {
    id:"title"
  }, "Namaste React");

  const heading2 = React.createElement("h2", {
    id:"title2"
  },"Namaste JS")

  const container = React.createElement("div",{
    id:"container"
  },[heading,heading2])
  const root = ReactDOM.createRoot(document.getElementById("root"));

  //Parsing react element inside the root
  root.render([container, heading]);