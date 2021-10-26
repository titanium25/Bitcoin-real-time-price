import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import moment from 'moment/moment.js'
import CircularProgress from '@mui/material/CircularProgress';


const Header = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        const subs = {"type": "SUBSCRIBE", "instruments": ["cc-btc-usd-cccagg"]}
        const ws = new WebSocket('wss://wstest.fxempire.com?token=btctothemoon');
        ws.onopen = () => ws.send(JSON.stringify(subs))
        ws.onclose = () => console.log('ws closed');
        ws.onmessage = e => {
            const message = JSON.parse(e.data);
            setData(message[Object.keys(message)[0]])
        }
    }, [])

    const arrow = (num) => {
        return num > 0 ?
            <><ArrowDropUpIcon style={{ color: 'green' }} className="curr-up-icon"/> &#xA0;</>
            :
            <><ArrowDropDownIcon style={{ color: 'red' }} className="curr-up-icon"/> &#xA0;</>
    }


    const delta = (num) => {
        if (num > 0) {
            return (
                <>
                    <span style={{ color: 'green' }}>+{Math.round((data.change + Number.EPSILON) * 100) / 100}</span>
                    <span style={{ color: 'green' }}>(+{data.percentChange}%)</span>
                </>
            )
        } else {
            return (
                <>
                    <span style={{ color: 'red' }}>{Math.round((data.change + Number.EPSILON) * 100) / 100}</span>
                    <span style={{ color: 'red' }}>({data.percentChange}%)</span>
                </>
            )
        }
    }

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        p: 2,
                        width: 1
                    },
                }}
            >
                <Paper elevation={5}>
                    <div className="wrapper">
                        <div>
                            <div className="logo">
                                <img src={require('../img/btc.png').default} alt="btc logo"/>
                                &#xA0; Bitcoin
                            </div>
                            <div className="date-time">
                                As of:
                                {
                                    moment(data.lastUpdate)
                                        .format(' MMM DD, YYYY HH:mm UTC')
                                    || '...loading'
                                }

                            </div>
                        </div>
                        {
                            isNaN(data.last) ? <CircularProgress/> :
                                <div>
                                    <div className="price">

                                        {arrow(data.change)}

                                        {
                                            new Intl.NumberFormat("en-IN",
                                                {
                                                    style: "currency",
                                                    currency: "USD",
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                })
                                                .format(data.last)
                                        }

                                    </div>
                                    <div className="delta">
                                        {delta(data.change)}
                                    </div>
                                </div>
                        }
                    </div>
                </Paper>

            </Box>
        </div>
    );
};

export default Header;