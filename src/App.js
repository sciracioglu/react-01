import Expenses from "./components/Expences/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";
import Chart from "./components/Chart/ChartBar";

const DUMMY_EXPENSES = [
    {id: 1, title: 'Car Insurance', amount: 295.45, date: new Date(2021, 3, 15)},
    {id: 2, title: 'Toilet Paper', amount: 35.22, date: new Date(2021, 2, 15)},
    {id: 3, title: 'New TV', amount: 995.99, date: new Date(2021, 1, 15)},
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        });
    }

    return (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewExpense onAddExpense={addExpenseHandler}/>

        <Expenses items={expenses}/>
    </div>);
}

export default App;
