import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props)
{
    let saveExpenseData = (receiveExpenseData) =>
    {
        let ExpenseData = { ...receiveExpenseData, id: ( Math.random() * 10000 ).toString() }
        props.onAddUserExpense(ExpenseData);
        console.log(ExpenseData);
    };
    
    return (
        <div className = "new-expense">
            <ExpenseForm submitExpenseData = { saveExpenseData } /> 
        </div>
    );
}

export default NewExpense; 