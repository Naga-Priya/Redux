import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

function ExpenseList(props) {
    const expenses = useSelector((state)=>{return (state.items)});
    const dispatch = useDispatch();
    // expenses.map(expense => {<li>{expense.name}</li>});
    console.log(expenses);

    const deleteItem= (id)=>{
        console.log("Delete Item: ", id);
        dispatch({
            type:'DEL_ITEM',
            payload:id
          })
    }

    return (
        <div className='col-12'>
            <ul className="list-group">
            {expenses.map((expense) => {
                return (<ExpenseItem expense={expense}
                                    messenger={deleteItem}/>);
                })}
            </ul>
            {/* <button onClick={()=>console.log({expenses})}>Click To Log</button> */}
            {/* <ExpenseItem expenses={expenses}/> */}
        </div>
    );
}
const ExpenseItem = (props)=>{
    const id = props.expense.id;
    return(
        <li class="list-group-item d-flex justify-content-between align-items-center">
            {props.expense.name}
            <span >{props.expense.cost}</span>
            <span class="badge badge-primary badge-pill">
                <button onClick={()=>{props.messenger(id)}}>Del</button>
            </span>
        </li>
    )

}
export default ExpenseList;