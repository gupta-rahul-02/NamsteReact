import  React from'react'
import  ReactDOM  from 'react-dom/client';
  

const heading = React.createElement("h1", {
    id:"title",
    key:"1"
  }, "Namaste React");

  const heading2 = React.createElement("h2", {
    id:"title2",
    key:"2"
  },"Namaste JS")

const heading3 = React.createElement("h3",{
  id:"title",
  key:"4"
},"Namaste React Native")

  const container = React.createElement("div",{
    id:"container",
    key:"3"
  },[heading,heading2,heading3])


  const header = React.createElement("div",{
    id:"title1",
    key:"11"
  },
  React.createElement("h1",{
    id:"title1",
    key:"12"
  },"Namste from nested"),
  React.createElement("h2",{
    id:"title1",
    key:"13"
  },"Namaste2"),
  React.createElement("h3",{
    id:"title1",
    key:"14"
  },"Namaste Rahul"))

  const root = ReactDOM.createRoot(document.getElementById("root"));

  //Parsing react element inside the root
  root.render(header);