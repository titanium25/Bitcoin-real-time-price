import React, {useEffect, useState} from 'react';
import BitCoinDAL from "../adapters/BitCoinDAL";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



const Chart = () => {

    const [chart, setChart] = useState([]);

    const options = {
        title: {
            text: 'My chart'
        },
        series: [{
            name: 'Price',
            data: [chart.High]
        }]
    }

    useEffect(async () => {
        const response = await BitCoinDAL.getAll();
        setChart(response.data.data)
    }, [])

    return (
        <div>

            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />


            {chart.map((v,i) => {
                return (<div key={i}>{v.High}</div>)
            })}
        </div>
    );
};

export default Chart;