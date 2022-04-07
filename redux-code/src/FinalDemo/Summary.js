import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import $ from 'jquery';
import { Alert } from 'bootstrap';

function Summary(props) {
    const budget = useSelector((state)=>{return state});
    return (
        
        <div className="d-flex justify-content-between summary">
            <Budget/>
            <div className='col-3 summary-items remaining' >
                Remaining: ${budget.balance}
            </div>
            <div className='col-3 summary-items spent' >
                Spent: ${budget.total}
            </div>
        
        </div>
    );
}

function Budget() {
    const income = useSelector((state)=>{return state.income});
    const dispatch = useDispatch();

    const changeIncome = (e) => {
        if(e.target.innerText == "Edit"){
            // $("#income").attr("readonly", false);
            // document.getElementById("income").setAttribute('readOnly','false');
            document.getElementById("income").setAttribute('backgroundcolor',"red");
            var eltInc = document.getElementById("income");
            eltInc.classList.remove("hidden");
            var eltTxt = document.getElementById("text");
            eltTxt.classList.add("hidden");
            e.target.innerText = "Save";
        }
        else{ 
            // let newIncome = $("#income");
            var eltInc = document.getElementById("income");
            let newIncome = document.getElementById("income").value;
            if (newIncome>0)
            {
                dispatch({
                    type:'CNG_INCOME',
                    payload:newIncome
                })
                e.target.innerText = "Edit";
                var eltTxt = document.getElementById("text");
                eltInc.classList.add("hidden");
                eltTxt.classList.remove("hidden");
                // $("#income").attr("readonly","true");
            }
            else{
                alert("Invalid Income");
            }
        }
    }
    return (
        
            <div className='col-3 summary-items budget' >
                <span id="text">Budget: ${income}</span>
                <input className = "hidden income" id = "income"  type="number"  ></input>
                <span> </span>
                <button id="editBtn" className="btn btn-primary btn-sm" onClick={changeIncome}>Edit</button>
            </div>
        
    );
}

export default Summary;