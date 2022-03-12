import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpeseData) => {
        const expenseData = {
            ...enteredExpeseData, id: Math.random().toString()
        }
        console.log('in New Expense');
        props.onAddExpense(expenseData)
    }

    return (<div className="space-y-8 divide-y divide-gray-200">
        <ExpenseForm onSavedExpense={saveExpenseDataHandler} />
    </div>)
}

export default NewExpense;