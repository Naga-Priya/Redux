import React from 'react';
import AddExpense from './AddExpense';
import ExpenseList from './ExpenseList';
import SearchBar from './SearchBar';
import Summary from './Summary.js';
import './FinalDemo.css';

function MyBudget(props) {
    return (
        <div className="container">
            <h2 className="heading">My Budget Planner</h2>
            <Summary />
            <div className="spacer">
            <SearchBar/>
            </div>
            <ExpenseList/>
            
            <div className="spacer">
                <AddExpense/>
            </div>
            
            
        </div>
    );
}

export default MyBudget;