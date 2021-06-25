import React, { useState, useEffect } from 'react'
import './reservation.css'
import ReservationHead from '../../Components/Header/ReservationHead'
import Cars from './Cars'
import Package from './Package'
import EndDate from './EndDate'
import ReservationForm from './ReservationForm'
import { PackageModal } from '../../Components'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import DateSlide from '../../Components/DateSlide'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../store/reservation/reservationPageChangeSlice'

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



export default function Reservation() {
    const [value, setValue] = React.useState(1);

    const dispatch = useDispatch()
    const handleChange = (event, newValue) => {
        setValue(newValue);
        dispatch(changePage(newValue));
    };

    const page = useSelector((state) => state.reservationChange.value);


    useEffect(() => {
        setValue(page)
    }, [page]);

    return (
        <div className="reservation-page">
            <ReservationHead />
            <div className="container-fluid reservation-tab-area">
                <div className="d-flex flex-row">
                    <button type="button" className="btn border-bottom border-right py-3 px-3 fs-3">x</button>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" inkBarStyle={{ background: '#FF710F' }} >
                        <Tab className="checked-reserve" label={
                            <div className="tab-button text-start py-2 ">
                                <span className="h6 bold">1.KİRALAMA | ALIŞ & İADE </span>
                                <p className="">Bodrum, Yalıkavak </p>
                                <p className="h7">21.06.2021 <img src="./assets/icons/arrow-circle.svg" className="my-auto ms-1 h-50" /> 21.06.2021</p>

                                <a href="#" className="checked-link position-absolute mt-lg-3">Düzenle <span><img src="./assets/icons/check-green.svg" className="check arrow-icon mt-1 ms-1" /></span></a>
                            </div>
                        } {...changeProps(1)} />
                        <Tab label={
                            <div className="tab-button text-start py-2">
                                <span className="h6 bold">2.ARACINIZ </span>
                                <p className="h7">Mercedes E200 AMG  <img src="./assets/icons/rightic.svg" className="my-auto ms-lg-3  h-25 right-tick-icon" /> <span className="bold ms-lg-1">340,37₺ </span>  </p>
                                <p className="h7">Dizel Otomatik</p>
                            </div>
                        } {...changeProps(1)} />
                        <Tab label={
                            <div className="tab-button text-start py-2">
                                <span className="h6 bold">3. GÜVENCE PAKETLERİ </span>
                                <p className="h7">PAKET DETAYLARINI <img src="./assets/icons/rightic.svg" className="my-auto ms-5 h-25 right-tick-icon" /> <br /> SEÇİN</p>
                            </div>
                        } {...changeProps(2)} />
                        <Tab label={
                            <div className="tab-button text-start py-2">
                                <span className="h6 bold">4. EK ÜRÜNLER </span>
                                <p className="h7">Bodrum, Yalıkavak <img src="./assets/icons/rightic.svg" className="my-auto ms-5 h-25 right-tick-icon" /></p>
                                <a className="h7 text-dark" data-bs-toggle="modal" data-bs-target="#packageModal">Tümünü göster</a>
                            </div>
                        } {...changeProps(3)} />
                        <Tab label={
                            <div className="tab-button text-start py-2">
                                <span className="h6 bold">5. REZERVASYON </span>
                                <p className="h7">Bodrum, Yalıkavak</p>
                                <a className="h7 text-dark" data-bs-toggle="modal" data-bs-target="#packageModal">Tümünü göster</a>
                            </div>
                        } {...changeProps(4)} />
                    </Tabs>
                </div>
            </div>

            <TabPanel value={value} index={0}>
                <DateSlide />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="container-fluid">
                    <Cars />
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Package />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Package />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <ReservationForm />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <EndDate />
            </TabPanel>

            <PackageModal />
        </div>
    )
}
