import React, { useEffect, useState } from 'react'
import './cars.css'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import axios from 'axios'
import { CarCardList, CarModal } from '../../Components/'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function changeProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Car() {

    const [value, setValue] = useState(0);
    const [carsGet, setCarsGet] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    useEffect(() => {
        axios.post('http://panel.wocurrency.com/api/arabalar')
            .then(function (response) {
                setCarsGet(response.data)
            })
    }, [])

    return (
        <section className="cars">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p><a href="/" className="text-dark">Anasayfa</a>  /  Araçlar </p>
            </div>

            <div className="container cars-tab-menu">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
                    scrollButtons="auto" className="tab-bar shadow-light mb-5" centered>
                    <Tab label="Tüm Araçlar" {...changeProps(0)} />
                    <Tab label="Ekonomik" {...changeProps(1)} />
                    <Tab label="Orta" {...changeProps(2)} />
                    <Tab label="Prestij" {...changeProps(3)} />
                    <Tab label="Premium" {...changeProps(4)} />
                    <Tab label="Business" {...changeProps(5)} />
                </Tabs>
            </div>

            <div className="container-fluid car-areas ps-5">
                <div className="ps-4 area">
                    <TabPanel value={value} index={0}>
                        <div className="row">
                            {carsGet.map((item) => !item.car_root_id ? <div className="col-lg-4  col-md-6">
                                <CarCardList carsValues={item} />
                            </div> : '')}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="row">
                            {carsGet.map((item) => !item.car_root_id ? item.car_class === 1 ? <div className="col-lg-4  col-md-6">
                                <CarCardList carsValues={item} />
                            </div> : '' : '')}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="row">
                            {carsGet.map((item) => !item.car_root_id ? item.car_class === 2 ? <div className="col-lg-4  col-md-6">
                                <CarCardList carsValues={item} />
                            </div> : '' : '')}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <div className="row">
                            {carsGet.map((item) => !item.car_root_id ? item.car_class === 3 ? <div className="col-lg-4  col-md-6">
                                <CarCardList carsValues={item} />
                            </div> : '' : '')}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <div className="row">
                            {carsGet.map((item) => !item.car_root_id ? item.car_class === 4 ? <div className="col-lg-4  col-md-6">
                                <CarCardList carsValues={item} />
                            </div> : '' : '')}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <div className="row">
                            {carsGet.map((item) => !item.car_root_id ? item.car_class === 5 ? <div className="col-lg-4  col-md-6">
                                <CarCardList carsValues={item} />
                            </div> : '' : '')}
                        </div>
                    </TabPanel>
                </div>
            </div>

            <CarModal />
        </section>
    )
}
