import React from 'react';
import './App.css';
import './aa.css'
import './Photo'
import './Title'
import './wrapper'

function App() {


  const ba = {
  name : {firstname : "izjeizjoe" , lastname:"izejzeoz"},
  photo: "./button.png" ,
  profillink:"https://www.facebook.com/",
   
  }
  return (
   <div>
     <p>{ba.name.firstname}</p>
     <p>{ba.name.lastname}</p>
      <img src={ba.image} />
     <button onClick={() =>{window.location = ba.profillink}}>facebook </button>
   </div>

  );
}


export default App