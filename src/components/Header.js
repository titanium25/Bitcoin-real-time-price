import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material";
import Moment from 'react-moment';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const Header = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        const subs = {"type": "SUBSCRIBE", "instruments": ["cc-btc-usd-cccagg"]}
        const ws = new WebSocket('ws://wstest.fxempire.com?token=btctothemoon');
        ws.onopen = () => ws.send(JSON.stringify(subs))
        ws.onclose = () => console.log('ws closed');
        ws.onmessage = e => {
            const message = JSON.parse(e.data);
            setData(message[Object.keys(message)[0]])
        }
    }, [])

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
                        <div className="aside-1">
                            <div className="in-row-1">
                            <img src={require('../img/btc.png').default} alt="btc logo"/>
                            <Typography variant="h6" gutterBottom component="div">
                                Bitcoin
                            </Typography>
                            </div>
                            As of: <Moment withTitle>{data.lastUpdate || '...loading'}</Moment>

                        </div>
                        <div className="aside-2">
                            <Typography variant="h5" gutterBottom component="div">
                                <ArrowDropUpIcon className="curr-up-icon"/>
                                {new Intl.NumberFormat("en-GB", {
                                    style: "currency",
                                    currency: "USD",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }).format(data.last)}
                            </Typography>
                            <div className="in-row-2">
                                <span className="start">{data.change.toFixed(2) || '...loading'}</span>
                                <span className="end">({data.percentChange || '...loading'}%)</span>
                            </div>
                        </div>
                    </div>
                </Paper>

            </Box>
        </div>
    );
};

export default Header;