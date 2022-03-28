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


function App(props) {
  const [color,setColor] = useState('White');
  console.log("Inside App");
  const counter = useSelector((data)=>{
    return data});
  // const color = useSelector((data)=>{
  //     return data});
  
  const colval = useSelector((data)=>{
         return data.color});
  const dispatch = useDispatch();
  
  // useEffect(()=>{
  //   console.log(props);
  // },[color])
  const handleChange =(e)=>{
    // setColor(e.target.value);
    dispatch({
      type:'CHANGE_COLOR',
      payload:e.target.value
    })
  }
  
  return (
    <div className="App">
      {/* <h1>Counter: {counter}</h1> */}
      {/* <button onClick={()=>dispatch(increment())}>INCREMENT</button>
      <button onClick={()=>dispatch(decrement())}>DECREMENT</button> */}
      <h1>My Favorite color is {color},{colval}</h1>
      {/* <input type="radio" name="colors" id="red" onClick={()=>dispatch(red())}/>Red
      <input type="radio" name="colors" id="blue" onClick={()=>dispatch(blue())}/>Blue
      <input type="radio" name="colors" id="green" onClick={()=>dispatch(green())}/>Green
      <input type="radio" name="colors" id="yellow" onClick={()=>dispatch(yellow())}/>Yellow */}
      <input type="radio" name="colors" value="red" onClick={handleChange}/>Red
      <input type="radio" name="colors" value="blue" onClick={handleChange}/>Blue
      <input type="radio" name="colors" value="green" onClick={handleChange}/>Green
      <input type="radio" name="colors" value="yellow" onClick={handleChange}/>Yellow

    </div>
  );
}

// const mapStateToProps = (state) => {
//   return{
//     data: state
//   }
// };
// const mapDispatchToProps = dispatch =>{
//     return{
//       changeColor: (color) => dispatch ({
//         type: 'CHANGE_COLOR', payload:color
//       })
//     }
//   }

// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default App;