import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
    return <Card>
        <ExpenseItem
            date={props.items[0].date}
            amount={props.items[0].amount}
            title={props.items[0].title}
        />
        <ExpenseItem
            date={props.items[1].date}
            amount={props.items[1].amount}
            title={props.items[1].title}
        />


    </Card>
}

export default Expenses;