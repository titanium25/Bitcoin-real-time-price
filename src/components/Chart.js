import React, {useEffect, useState} from 'react';
import BitCoinDAL from "../adapters/BitCoinDAL";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



const Chart = () => {

    const [chart, setChart] = useState([]);
    const [arr, setArr] = useState([]);



    useEffect(async () => {
        const response = await BitCoinDAL.getAll();
        response.data.data.map(v => arr.push([v.Date, v.High]))
        setChart(response.data.data)
    }, []);


    const options = {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'Bitcoin Price Chart'
        },

        series: [{
            name: 'Bitcoin Price in USD',
            data: arr,
            type: 'area',
            threshold: null,
            tooltip: {
                valueDecimals: 2
            },

            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            }
        }]
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default Chart;