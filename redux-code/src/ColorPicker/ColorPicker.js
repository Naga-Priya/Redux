import React  from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyColorsReducer from './MyColorsReducer';

function ColorPicker(props) {
    
    const dispatch = useDispatch();
    let MyColors = useSelector((state)=> {return state.myColors});
    
    //Mapping the array in store to state variable works for arrays
    //const MyColors = useSelector((state)=> state.myColors.map((x)=>x));
    
    // MyColors.map((value)=>{return <p> {value} </p>});

    // function displayColors(){
    //     return (
    //         <>
    //         {MyColors}
    //         </>
    //     )
    // }

    // useEffect(() => {
    //     console.log("Use Effect Called: ",MyColors);
    //     dispatch({
    //         type:'',
    //         payload:''
    //     })
    //   },[MyColors])


    const handleChange =(e)=>{
        //setColor(e.target.value);
        if(e.target.checked){
            dispatch({
              type:'ADD_COLOR',
              payload:e.target.value
            })
        }
        else {
            dispatch({
              type:'DEL_COLOR',
              payload:e.target.value
            })
        }
        console.log("In handleChange: ",MyColors);
      }

    return (
        <div className='colorPicker'>
            <h2>Color Picker Component</h2>
            {MyColors}
            <h3>My Favorite Colors are:</h3>
            {/* <ol>
            {MyColors}
            </ol> */}
            <ol>
            {MyColors.map((value)=>{return <li> {value} </li>})}
            </ol>
            <label>
                <input type="checkbox" id="Red" value="Red" onClick={handleChange}/>
            Red</label>  
            <label>
                <input type="checkbox" id="Blue" value="Blue" onClick={handleChange}/>Blue
            </label>
            <label>
                <input type="checkbox" id="Green" value="Green" onClick={handleChange}/>Green
            </label>
            <label>
                <input type="checkbox" id="Yellow" value="Yellow" onClick={handleChange}/>Yellow
            </label>
        </div>
    );
}

export default ColorPicker;