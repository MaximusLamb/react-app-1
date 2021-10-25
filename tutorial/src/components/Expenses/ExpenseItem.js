import React, { useState } from 'react';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../Card';

export function ExpenseItem(props) {

//Activate State and Make it Alterable
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

//Create an Event Handler for the Button
  const handleTitleChange = () => {
    
  //Setting state when button is clicked
    setTitle('Disposable Butt Napkins');
    setAmount('4.20');
  }
  
  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">${amount}</div>
      <button onClick={handleTitleChange}>Change Title</button>
    </Card>
  )
}

