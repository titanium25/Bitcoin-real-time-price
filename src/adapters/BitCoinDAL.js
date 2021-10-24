import axios from "axios";

const url = 'https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/histominute?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd&limit=30';

const getAll = () => {
    return axios.get(url)
}

export default {getAll}