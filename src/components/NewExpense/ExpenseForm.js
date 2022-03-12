import React, {useState} from "react";


const ExpenseForm = (props) => {
    const [isShowForm, setIsShowForm] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHander = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const onSubmitHander = (event) => {
        event.preventDefault();
        const exppenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSavedExpense(exppenseData)
        setEnteredDate('');
        setEnteredAmount('');
        setEnteredTitle('');
    }
    const toggleFormHandler = () =>{
        setIsShowForm(!isShowForm);
    }



    return (<div>
        {!isShowForm && <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={toggleFormHandler}>Add New Expense
        </button>}
        {isShowForm &&
        <form className="space-y-8 divide-y divide-gray-200 mb-8" onSubmit={onSubmitHander}>
            <div className="pt-8">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Expense Information</h3>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="col-span-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={enteredTitle}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                onChange={titleChangeHander}
                            />
                        </div>
                    </div>

                    <div className="col-span-3">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date
                        </label>
                        <div className="mt-1">
                            <input
                                type="date"
                                name="date"
                                id="date"
                                min="2022-01-01"
                                max="2022-12-31"
                                value={enteredDate}
                                autoComplete="family-name"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                onChange={dateChangeHandler}
                            />
                        </div>
                    </div>

                    <div className="col-span-3">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                            Amount
                        </label>
                        <div className="mt-1">
                            <input
                                id="amount"
                                name="amount"
                                type="number"
                                min="0.01"
                                step="0.01"
                                value={enteredAmount}
                                autoComplete="email"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                onChange={amountChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="col-span-3">

                        <div className="flex justify-end p-8">
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Save
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                onClick={toggleFormHandler}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </form> }
    </div>);
}

export default ExpenseForm;