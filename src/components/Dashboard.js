import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import Chart from "./Chart";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const Dashboard = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const [alignment, setAlignment] = React.useState('web');

    const handleChange1 = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Overview"  />
                    <Tab label="History"  />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange1}
                >
                    <ToggleButton value="one_min">1 Minute</ToggleButton>
                    <ToggleButton value="five_min">5 Minutes</ToggleButton>
                    <ToggleButton value="one_hour">1 Hour</ToggleButton>
                    <ToggleButton value="one_week">1 Week</ToggleButton>
                </ToggleButtonGroup>
                <br/> <br/>
                <Chart />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Box>
    );
};

export default Dashboard;