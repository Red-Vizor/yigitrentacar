import React, { useEffect, useState } from 'react'
import './cars.css'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import axios from 'axios'
import { CarCardList, CarModal } from '../../Components/'
import $ from 'jquery';
window.jQuery = $;

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
    const [CarClassMobile, setCarClassMobile] = useState('Tüm Araçlar')
    const [carsGet, setCarsGet] = useState([]);
    const [dropMenu, setDropMenu] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    useEffect(() => {
        axios.post('http://panel.wocurrency.com/api/arabalar')
            .then(function (response) {
                setCarsGet(response.data)
            })
    }, [])

    const width = window.innerWidth;
    return (


        <section className="cars">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p><a href="/" className="text-dark">Anasayfa</a>  /  Araçlar </p>
            </div>

            <div className="container cars-tab-menu">

                {
                    width < 991 ?
                        <div>
                            <div className="dropdown pb-5">
                                <button class="btn btn-light bg-white car-drop-btn dropdown-toggle semi-bold w-100 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                   {CarClassMobile} <i class="las la-angle-down semi-bold"></i>
                                </button>
                                <ul class="dropdown-menu car-drop w-100 text-center" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item semi-bold" onClick={() => {setValue(0); setCarClassMobile('Tüm Araçlar')}}>Tüm Araçlar</a></li>
                                    <li><a class="dropdown-item semi-bold" onClick={() => {setValue(1); setCarClassMobile('Ekonomik')}}>Ekonomik</a></li>
                                    <li><a class="dropdown-item semi-bold " onClick={() => {setValue(2); setCarClassMobile('Orta')}}>Orta</a></li>
                                    <li><a class="dropdown-item semi-bold" onClick={() => {setValue(3); setCarClassMobile('Prestij')}}>Prestij</a></li>
                                    <li><a class="dropdown-item semi-bold" onClick={() => {setValue(4); setCarClassMobile('Premium')}}>Premium</a></li>
                                    <li><a class="dropdown-item semi-bold" onClick={() => {setValue(5); setCarClassMobile('Business')}}>Business</a></li>
                                </ul>
                            </div>
                        </div> :
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="tab-bar tab-areas web-tab-bar" centered >
                            <Tab label="Tüm Araçlar" {...changeProps(0)} />
                            <Tab label="Ekonomik" {...changeProps(1)} />
                            <Tab label="Orta" {...changeProps(2)} />
                            <Tab label="Prestij" {...changeProps(3)} />
                            <Tab label="Premium" {...changeProps(4)} />
                            <Tab label="Business" {...changeProps(5)} />
                        </Tabs>
                }

            </div>



            <div className="container-fluid car-areas ps-5">
                <div className="ps-4 area">
                    <TabPanel value={value} index={0}>
                        <div className="row">
                            {carsGet.map((item) => !item.root_car_id ? <div className="col-lg-4  col-md-6">
                                <CarCardList carsValues={item} />
                            </div> : '')}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="row">
                            {carsGet.map((item) => !item.root_car_id ? item.car_class == 1 ? <div className="col-lg-4  col-md-6">
                                <CarCardList carsValues={item} />
                            </div> : '' : '')}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="row">
                            {carsGet.map((item) => !item.root_car_id ? item.car_class == 2 ? <div className="col-lg-4  col-md-6">
                                <CarCardList carsValues={item} />
                            </div> : '' : '')}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <div className="row">
                            {carsGet.map((item) => !item.root_car_id ? item.car_class == 3 ? <div className="col-lg-4  col-md-6">
                                <CarCardList carsValues={item} />
                            </div> : '' : '')}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <div className="row">
                            {carsGet.map((item) => !item.root_car_id ? item.car_class == 4 ? <div className="col-lg-4  col-md-6">
                                <CarCardList carsValues={item} />
                            </div> : '' : '')}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <div className="row">
                            {carsGet.map((item) => !item.root_car_id ? item.car_class == 5 ? <div className="col-lg-4  col-md-6">
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
