import React from 'react';
import { useDispatch } from 'react-redux';
import ExpenseList from './ExpenseList.js';

function AddExpense(props) {

    let idGen = 0;
    const dispatch = useDispatch();

    const addItems = ()=>{
        if(document.getElementById("expName").value==''){
            alert("Enter valid description for Expense");
        }
        else if(document.getElementById("expCost").value<=0){
            alert("Enter Expense Amount");
        }
        else {
            let newItem = {id:idGen++,
                            name:document.getElementById("expName").value,
                            cost:Number(document.getElementById("expCost").value)}
            //alert(JSON.parse(JSON.stringify(newItem)));
            alert(JSON.stringify(newItem));
            console.log(newItem);
            dispatch({
                type:'ADD_ITEM',
                payload:newItem
              })
        }
    }

    return (
        <div>
            
            <h3>Add Expense</h3>
            <div className="container">
            <div className="row">
                <div className="col-6">
                
                <label className="row-form-label" htmlFor="expName">Name</label>
                <input type="text" id="expName" className="form-control" />
                </div>
                <div className="col-6">
                
                <label className="row-form-label" htmlFor="expCost">Cost</label>
                <input type="number" id="expCost" className="form-control" />
                </div>
            </div>
            <div className='row'><br></br></div>
            <div className='row'>
            <div className="col-2">
            <button type="button" className="btn btn-primary" onClick={addItems}>Save</button>
            </div>
            </div>
            </div>
        </div>
    );
}

export default AddExpense;