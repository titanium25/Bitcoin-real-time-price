import React, {useEffect, useState} from 'react';
import BitCoinDAL from "../adapters/BitCoinDAL";

const Chart = () => {

    const [chart, setChart] = useState([]);

    useEffect(async () => {
        const response = await BitCoinDAL.getAll();
        setChart(response.data.data)
    }, [])

    return (
        <div>
            {chart.map((v,i) => {
                return (<div key={i}>{v.Date}</div>)
            })}
        </div>
    );
};

export default Chart;