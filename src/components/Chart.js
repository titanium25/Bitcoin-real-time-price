import React, {useEffect, useState} from 'react';
import BitCoinDAL from "../adapters/BitCoinDAL";

const Chart = () => {

    const [chart, setChart] = useState({});

    useEffect(async () => {
        const response = await BitCoinDAL.getAll();
        setChart(response.data)
        console.log(chart)
    }, [])

    return (
        <div>
            Chart
        </div>
    );
};

export default Chart;