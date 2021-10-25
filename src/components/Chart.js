import React, {useEffect, useState} from 'react';
import BitCoinDAL from "../adapters/BitCoinDAL";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Chart = (props) => {



    const options = {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'Bitcoin Price Chart'
        },
        xAxis: {
            type: 'datetime',
            startOnTick: true,
            // showFirstLabel: true,
            endOnTick: true,
            // showLastLabel: true,
            categories: props.time,
            tickInterval: 1,
            labels: {
                rotation: 20,
                align: 'left',
                step: 5,
                enabled: true,
                overflow: 'justify',

            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Bitcoin Price in USD',
            data: props.arr,
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