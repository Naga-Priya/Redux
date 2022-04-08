import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

function ExpenseList(props) {
    const expenses = useSelector((state)=>{return (state.items)});
    const filterTxt = useSelector((state)=>{return (state.filterTxt).toLowerCase()});
    const dispatch = useDispatch();
    // expenses.map(expense => {<li>{expense.name}</li>});
    console.log(expenses);

    const deleteItem= ({expense})=>{
        console.log("Delete Item: ", {expense});
        dispatch({
            type:'DEL_ITEM',
            payload:expense
          })
    }

    return (
        <div className="container">
        {/* <div className='col-12'> */}
            <ul className="list-group">
            {expenses.filter(item => item.name.toLowerCase().includes(filterTxt)).map((expense) => {
                return (<ExpenseItem expense={expense}
                                    messenger={deleteItem}/>);
                })}
            </ul>
            {/* <button onClick={()=>console.log({expenses})}>Click To Log</button> */}
            {/* <ExpenseItem expenses={expenses}/> */}
        {/* </div> */}
        </div>
    );
}
const ExpenseItem = (props)=>{
    const id = props.expense.id;
    return(
        <li className="list-group-item d-flex justify-content-between">
            {props.expense.name}
            <span className="space">
                ${props.expense.cost}
                <button className=" round-button" onClick={()=>{props.messenger({...props})}}>Del</button>
            </span>
        </li>
    )

}
export default ExpenseList;