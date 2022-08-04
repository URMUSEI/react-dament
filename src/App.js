import logo from './logo.svg';
import Customer from './Coms/Customer'
import React, { Component } from 'react';
import './App.css';

const customers = [{
  'id':1,
  'no':'2',
  'mail':'3',
  'pwd':'4'
},
{
  'id':2,
  'no':'2',
  'mail':'3',
  'pwd':'4'
},
{
  'id':3,
  'no':'2',
  'mail':'3',
  'pwd':'4'
}]

function App() {
  return ( 
    <div>
     {
      customers.map(c => {
        return(
          <Customer key={c.id} id={c.id} no={c.no} mail={c.mail} pwd={c.pwd} />
        )
      })
     }
    </div>

  )
}
export default App;
