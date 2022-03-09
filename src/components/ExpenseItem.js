function ExpenseItem(props) {
    const month = props.date.toLocaleString('tr-TR',{month:'long'});
    const day = props.date.toLocaleString('tr-TR',{day:'2-digit'});
    const year = props.date.getFullYear();
    return (<>
            <li>
                <a href="#" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-indigo-600 truncate">{props.title}</p>
                            <div className="ml-2 flex-shrink-0 flex">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">${props.amount}</p>
                            </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                          clipRule="evenodd"/>
                                </svg>
                                <p>
                                    <time dateTime="2021-28-03">{day} {month} {year}</time>
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
    </>)
}

export default ExpenseItem;