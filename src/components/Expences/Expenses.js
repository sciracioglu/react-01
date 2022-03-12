import React, {useState} from "react";
import Card from "../UI/Card";
import YearFilter from "./YearFilter";
import ExpensesList from "./ExpensesList";
import ChartBar from "../Chart/ChartBar";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('');
    const filterChangeHandler = (year) => {
        setSelectedYear(year)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (<div>
        <ChartBar items={filteredExpenses} />
        <YearFilter selected={selectedYear} onChangeFilter={filterChangeHandler}/>
        <Card>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    </div>)
}

export default Expenses;