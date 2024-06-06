import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI_Design/Card';

function Expenses(props) 
{
    return (
        <Card className="expenses">
            {
                props.item.map( (New_Expense) => ( 
                <ExpenseItem title = { New_Expense.title } date = { New_Expense.date } amount = { New_Expense.amount }> 
                </ExpenseItem> 
                ) )
            }
        </Card>
    );
}

export default Expenses;