import axios from "axios";

const url = 'https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/';

const getAll = (query) => {
    return axios.get(url + query)
}

export default {getAll}