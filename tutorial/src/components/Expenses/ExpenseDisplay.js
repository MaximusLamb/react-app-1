import './ExpenseDisplay.css';
import { ExpenseItem } from './ExpenseItem';
import Card from '../Card'

export function ExpenseDisplay(props) {

const expense = props.expenses;

  return (
    <Card className="expenses">
      {expense.map(e=>(<ExpenseItem title={e.title} amount={e.amount} date={e.date}/>))}
    </Card>
  )
}