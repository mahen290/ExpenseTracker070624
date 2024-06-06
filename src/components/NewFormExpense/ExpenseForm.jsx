import React, { useState } from 'react'; 
import './ExpenseForm.css';

function ExpenseForm(props)
{
    let [ userEnterTitle, setUserEnterTitle ] = useState("");
    let [ userEnterDate, setUserEnterDate ] = useState("");
    let [ userEnterAmount, setUserEnterAmount ] = useState("");

    let userChangeTitle = (event) => 
        {
            setUserEnterTitle(event.target.value);
        };
    let userChangeDate = (event) =>
        {
            setUserEnterDate(event.target.value);
        };
    let userChangeAmount = (event) =>
        {
            setUserEnterAmount(event.target.value);
        };

    function form_submit(event)
    {
        event.preventDefault();

        let ExpenseData = {
            title: userEnterTitle,
            amount: userEnterAmount,
            date: userEnterDate
        }

        props.submitExpenseData(ExpenseData);
        console.log(ExpenseData);

        setUserEnterTitle("");
        setUserEnterDate("");
        setUserEnterAmount(""); 
    };
        
    return (
        <form onSubmit = { form_submit }>

            <div className = "new-expense-controls">

                <div className = "new-expense-control">
                    <label for> Your Expense Title : </label>
                    <input type = "text" onChange = { userChangeTitle } value = { userEnterTitle } /> 
                </div>

                <div className = "new-expense-control">
                    <label for> Your Expense Date : </label>
                    <input type = "date" onChange = { userChangeDate } value = { userEnterDate } /> 
                </div>

                <div className = "new-expense-control">
                    <label for> Your Expense Amount : </label>
                    <input type = "number" onChange = { userChangeAmount } value = { userEnterAmount } /> 
                </div>

                <div className = "new-expense-actions">
                    <button type = "submit" value = "New Expense Item"> Add Your New Expenses </button>
                </div>

            </div>

        </form>
    );
}

export default ExpenseForm;