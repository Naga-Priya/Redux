import React from 'react';
import AddExpense from './AddExpense';
import ExpenseList from './ExpenseList';
import SearchBar from './SearchBar';

function MyBudget(props) {
    return (
        <div className="container">
            <h1>My Budget Planner</h1>
            <SearchBar/>
            <ExpenseList/>
            <div className='px-2 '>
            <AddExpense/>
            </div>
            
        </div>
    );
}

export default MyBudget;