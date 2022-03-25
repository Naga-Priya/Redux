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
function App() {
  console.log("Inside App");
  const counter = useSelector((data)=>{
    return data});
  const color = useSelector((data)=>{
      return data});
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(increment())}>INCREMENT</button>
      <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
      <h1>My Favorite color is {color}</h1>
      <input type="radio" name="colors" id="red" onClick={()=>dispatch(red())}/>Red
      <input type="radio" name="colors" id="blue" onClick={()=>dispatch(blue())}/>Blue
      <input type="radio" name="colors" id="green" onClick={()=>dispatch(green())}/>Green
      <input type="radio" name="colors" id="yellow" onClick={()=>dispatch(yellow())}/>Yellow

    </div>
  );
}

export default App;
