import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props)
{
    const day = props.date.toLocaleString( 'en-US', { day: '2-digit' } );
    const month = props.date.toLocaleString( 'en-US', { month: 'long' } );
    const year = props.date.getFullYear();
    return(
        <div className = "expense-date">
            <div className = "expense-date-day"> { day } </div>
            <div className = "expense-date-month"> { month } </div>
            <div className = "expense-date-year"> { year } </div>
        </div> 
    );
}

export default ExpenseDate;