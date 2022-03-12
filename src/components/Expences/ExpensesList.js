import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2>No Expenses Found</h2>
    }
    return props.items.map((expense) =>
        (<ExpenseItem
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
            key={expense.id}
        />));
}

export default ExpensesList