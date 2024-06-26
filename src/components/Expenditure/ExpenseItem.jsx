import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI_Design/Card';

function ExpenseItem(props)
{
    return (
        <Card className = "expense-item">
            <ExpenseDate date = { props.date } />
            <div className = "expense-item-description">
                <h2> { props.title } </h2>
                <div className = "expense-item-price"> { props.amount } Rupees </div>
            </div>
        </Card>
    );
};

export default ExpenseItem;