import logo from './logo.svg';
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {id: 1, title: 'Car Insurance', amount: 295.45, date: new Date(2021, 2, 15)},
        {id: 2, title: 'Toilet Paper', amount: 35.22, date: new Date(2021, 2, 15)},
        {id: 3, title: 'New TV', amount: 995.99, date: new Date(2021, 2, 15)},
    ];
    return (
        <div>
            <h1 className="text-3xl font-bold underline">let's get started</h1>
            <p>This is also avalible</p>
            <ul role="list" className="divide-y divide-gray-200">
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} key={expenses[0].id}/>
            </ul>
        </div>
    );
}

export default App;
