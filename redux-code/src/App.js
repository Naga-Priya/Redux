import logo from './logo.svg';
import './App.css';
import {useSelector} from 'react-redux';
import {increment} from './action/CounterAction';
import {decrement} from './action/CounterAction';
import { red } from './action/ColorActions';
import { blue } from './action/ColorActions';
import { green } from './action/ColorActions';
import { yellow } from './action/ColorActions';
import {useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import User from './testUser/User';

function App(props) {

  const [user,setUser] = useState(null);
  const [error,setError] = useState('');

  window.fetch = jest.fn(() =>{
    const user = {name: "Priya", email:"test@test.com"}
    return Promise.resolve ({
      json: () =>Promise.resolve(user),
    });
  });

  useEffect(async ()=>{
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(user =>setUser(user))
    .catch((error) => setError(error.message)); 
  },[]);
  if(error){
    return <span>{error}</span>
  }
  return (
    <div className="App">
    <h1>Hello World</h1>
    <ul className='animals'>
      <li>Lion</li>
      <li>Elephant</li>
      <li>Horse</li>
      <li>Cat</li>
    </ul>
  {user ? <User user={user}/>:<span>Loading...</span>}
    </div>
  );
}

export default App;