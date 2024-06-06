import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenditure/Expenses';
import NewExpense from './components/NewFormExpense/NewExpense';

let Old_Expense = [

    { id: 'E1', title: 'Food', amount: 3800, date: new Date(2024, 1, 21) },

    { id: 'E2', title: 'House Rent', amount: 4500, date: new Date(2024, 2, 9) },

    { id: 'E3', title: 'Electric Bill', amount: 800, date: new Date(2024, 3, 10) },

    { id: 'E4', title: 'Petrol', amount: 1800, date: new Date(2024, 4, 13) }

];

function App()
{
    let [ expenses, setExpenses ] = useState(Old_Expense);

    let addUserExpense = (New_Expense) =>
    {
        let Update_Expense = [ New_Expense, ...expenses ];
        setExpenses(Update_Expense);
        console.log(Update_Expense);
    };
        
    return (
        <div className = "header">
            <h1> Most Welcome In Our World </h1>
            <p> Monthly Expenses Record Tracker </p>
            <NewExpense onAddUserExpense = { addUserExpense } />
            <Expenses item = { expenses } />
        </div>
    );
}

export default App;