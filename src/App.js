import Expenses from "./components/Expences/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        {id: 1, title: 'Car Insurance', amount: 295.45, date: new Date(2021, 2, 15)},
        {id: 2, title: 'Toilet Paper', amount: 35.22, date: new Date(2021, 2, 15)},
        {id: 3, title: 'New TV', amount: 995.99, date: new Date(2021, 2, 15)},
    ];
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold underline">let's get started</h1>
            <NewExpense />
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
