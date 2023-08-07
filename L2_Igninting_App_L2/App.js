import  React from'react'
import  ReactDOM  from 'react-dom/client';
  
//Using React.createElement()

// const heading = React.createElement("h1", {
//     id:"title",
//     key:"1"
//   }, "Namaste React");

//   const heading2 = React.createElement("h2", {
//     id:"title2",
//     key:"2"
//   },"Namaste JS")

// const heading3 = React.createElement("h3",{
//   id:"title",
//   key:"4"
// },"Namaste React Native")

//   const container = React.createElement("div",{
//     id:"container",
//     key:"3"
//   },[heading,heading2,heading3])


  //Nesting of element using React.createElement()


  // const header = React.createElement("div",{
  //   id:"title1",
  //   key:"11"
  // },
  // React.createElement("h1",{
  //   id:"title1",
  //   key:"12"
  // },"Namste from nested"),
  // React.createElement("h2",{
  //   id:"title1",
  //   key:"13"
  // },"Namaste2"),
  // React.createElement("h3",{
  //   id:"title1",
  //   key:"14"
  // },"Namaste Rahul"))

  //using jsx for nested header

  const heading1 = (
  <h1 id='title'key="1">
    Namaste React
  </h1>
  )

  const Heading2  = () => (
    <h2 id='title' key="2">
      Namaste react 2
    </h2>
  )

  const heading3 = (
    <h3 id="title" key={3}>
      Namaste REACT 3
    </h3>
  )

  // const header = (
  //   <div className="title">
  //     {heading1}
  //     {heading2}
  //     {heading3}
  //   </div>
  // )


  //using functional component for creating nested header

  const HeaderComponent = () =>{
    return(
      <div className='title'>
        {heading1}
        {<Heading2/>}  /* Compostion of component */
        {heading3}

      </div>
    )
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));

  //Parsing react element inside the root
  root.render(<HeaderComponent/>);