import React, { useEffect, useState } from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



function Clock(){

  const [date, setDate] = useState(new Date())
  const [color, setColor] = useState(`#${Math.floor(Math.random()*16777215).toString(16)}`)

  useEffect(() => {
    setInterval(() => { 
      // console.log('hello')
      const localDate = new Date();
      setDate(localDate)
      if(localDate.getSeconds() % 10 == 0) {
        setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`);
      }
    }, 1000);
    

  }, []) 

  const comp1=(
    <div style={{backgroundColor: color, transition: '2s'}}>
      <h1>Часы</h1>
      <p>{date.toLocaleTimeString()}</p>
      <p>{}</p>
    </div>
    
  );
  return (comp1)
}

reportWebVitals();

export default Clock