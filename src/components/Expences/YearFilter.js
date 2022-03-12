import React from "react";

const YearFilter = (props) =>{
    const yearChangeHandler = (event) => {
      props.onChangeFilter(event.target.value);
    }

    return (<div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Filter By Year
        </label>
        <select
            id="location"
            name="location"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue={props.selected}
            onChange={yearChangeHandler}
        >
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
        </select>
    </div>)
}

export default YearFilter