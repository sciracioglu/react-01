import React, {useState} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const ChartBar = props => {
    const [values, setValues] = useState('');
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Expense Chart'
        },
        series: [
            {
                name: 'Months',
                data: [props.items.map(expense => {
                    return monthNames[expense.date.getMonth()] += expense.amount;
                })]
            }
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    };


    return (<div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>)
}

export default ChartBar;