import React, { useState, useEffect } from 'react'
import './reservation.css'
import ReservationHead from '../../Components/Header/ReservationHead'
import Cars from './Cars'
import Package2 from './PackageTwo'
import Package1 from './PackageOne'
import EndDate from './EndDate'
import ReservationForm from './ReservationForm'
import { PackageModalOne, PackageModalTwo } from '../../Components'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import DateSlide from '../../Components/DateSlide'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../store/reservation/reservationPageChangeSlice'
import {setHPT, setHPO} from '../../store/reservation/dateSlice'


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



export default function Reservation(props) {

    const packageOne = [{
        id: 1,
        name: "Mini Hasar Sigortası 1500 TL Kapsamlı",
        price: 50,
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with."
    },
    {
        id: 2,
        name: "Mini Hasar Sigortası 1500 TL Kapsamlı",
        price: 70,
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with."
    },
    {
        id: 3,
        name: "Mini Hasar Sigortası 1500 TL Kapsamlı",
        price: 80,
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with."
    },
    {
        id: 4,
        name: "Mini Hasar Sigortası 1500 TL Kapsamlı",
        price: 100,
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with."
    }]


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


    const dateValue = useSelector((state) => state.dateslice);

    useEffect(() =>{
        packageOne.map((item) => dispatch(setHPT(item)))
        packageOne.map((item) => dispatch(setHPO(item)))
    }, []) 
 


    return (
        <div className="reservation-page">
            <ReservationHead />
            <div className="container-fluid reservation-tab-area">
                <div className="d-flex flex-row web">
                    <button type="button" className="btn border-bottom border-right py-3 px-3 fs-3">x</button>
                    <Tabs value={value} aria-label="simple tabs example" inkBarStyle={{ background: '#FF710F' }} >
                        <Tab className={page > 0 ? 'checked-reserve' : ''} label={
                            <div className="tab-button text-start py-2 ">
                                <span className="h6 bold">1.KİRALAMA | ALIŞ & İADE </span>
                                <p className="">{dateValue.citySelect}</p>
                                <p className="h7">{dateValue.startDate} <img src="./assets/icons/arrow-circle.svg" className="my-auto ms-1 h-50" /> {dateValue.endDate} </p>
                                {page > 0 ? <a href="/reservation" className="checked-link position-absolute">Düzenle <span><img src="./assets/icons/check-green.svg" className="check arrow-icon mt-1 ms-1" /></span></a> : ''}
                            </div>
                        } {...changeProps(1)} />
                        <Tab className={page > 1 ? 'checked-reserve' : ''} label={
                            <div className="tab-button text-start py-2">
                                <span className="h6 bold">2.ARACINIZ </span>
                                <p className="h7 me-5">Mercedes E200 AMG  {page === 1 ? <span className="ms-4"><img src="./assets/icons/rightic.svg" className="my-auto ms-auto float-right h-25 right-tick-icon" /> </span> : ''} </p>
                                <p className="h7">Dizel Otomatik</p>

                                {page > 1 ? <a href="#" onClick={() => { dispatch(changePage(1)) }} className="checked-link position-absolute">Düzenle <span><img src="./assets/icons/check-green.svg" className="check arrow-icon mt-1 ms-1" /></span></a> : ''}
                            </div>
                        } {...changeProps(1)} />
                        <Tab className={page > 2 ? 'checked-reserve' : ''} label={
                            <div className="tab-button text-start py-2">
                                <span className="h6 bold">3. GÜVENCE PAKETLERİ </span>
                                <p className="h7 me-5">PAKET DETAYLARI  {page === 2 ? <span className="ms-4"><img src="./assets/icons/rightic.svg" className="my-auto ms-lg-3  h-25 right-tick-icon" /></span> : ''}</p>
                                <a className="h7 text-dark" data-bs-toggle="modal" data-bs-target="#packageModalOne">Tümünü göster</a>

                                {page > 2 ? <a href="#" onClick={() => { dispatch(changePage(2)) }} className="checked-link position-absolute">Düzenle <span><img src="./assets/icons/check-green.svg" className="check arrow-icon mt-1 ms-1" /></span></a> : ''}
                            </div>
                        } {...changeProps(2)} />
                        <Tab className={page > 3 ? 'checked-reserve' : ''} label={
                            <div className="tab-button text-start py-2">
                                <span className="h6 bold">4. EK ÜRÜNLER </span>
                                <p className="h7 me-5">EK ÜRÜN DETAYLARI  {page === 3 ? <span className="ms-4"><img src="./assets/icons/rightic.svg" className="my-auto ms-lg-3  h-25 right-tick-icon" /></span> : ''}</p>
                                <a className="h7 text-dark" data-bs-toggle="modal" data-bs-target="#packageModalTwo">Tümünü göster</a>
                                {page > 3 ? <a href="#" onClick={() => { dispatch(changePage(3)) }} className="checked-link position-absolute">Düzenle <span><img src="./assets/icons/check-green.svg" className="check arrow-icon mt-1 ms-1" /></span></a> : ''}
                            </div>
                        } {...changeProps(3)} />
                        <Tab className={page > 4 ? 'checked-reserve' : ''} label={
                            <div className="tab-button text-start py-2">
                                <span className="h6 bold">5. REZERVASYON </span>
                                <p className="h7">Rezervasyon Bilgileri  {page === 4 ? <span className="ms-4"><img src="./assets/icons/rightic.svg" className="my-auto ms-lg-3  h-25 right-tick-icon" /></span> : ''}</p>
                                {page > 4 ? <a href="#" onClick={() => { dispatch(changePage(4)) }} className="checked-link position-absolute">Düzenle <span><img src="./assets/icons/check-green.svg" className="check arrow-icon mt-1 ms-1" /></span></a> : ''}
                            </div>
                        } {...changeProps(4)} />
                    </Tabs>
                </div>
                <div className="d-flex flex-row mobile">
                    <button type="button" className="btn border-bottom border-right py-3 px-3 fs-3">x</button>
                    <Tabs className={page > 0 ? 'checked-reserve' : ''} value={value} onChange={handleChange} aria-label="simple tabs example" inkBarStyle={{ background: '#FF710F' }} >
                        <Tab className="checked-reserve" label={
                            <div className="tab-button text-start py-2 ">
                                1
                            </div>
                        } {...changeProps(1)} />
                        <Tab className={page > 1 ? 'checked-reserve' : ''} label={
                            <div className="tab-button text-start py-2">
                                2
                            </div>
                        } {...changeProps(1)} />
                        <Tab className={page > 2 ? 'checked-reserve' : ''} label={
                            <div className="tab-button text-start py-2">
                                3
                            </div>
                        } {...changeProps(2)} />
                        <Tab className={page > 3 ? 'checked-reserve' : ''} label={
                            <div className="tab-button text-start py-2">
                                4
                            </div>
                        } {...changeProps(3)} />
                        <Tab className={page > 4 ? 'checked-reserve' : ''} label={
                            <div className="tab-button text-start py-2">
                                5
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
                <Package1 pack={packageOne} packages="1"  modalName="packageModalOne"/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Package2 pack={packageOne} packages="2"  modalName="packageModalTwo" />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <ReservationForm />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <EndDate />
            </TabPanel>

            <PackageModalOne modalName="packageModalOne" />
            <PackageModalTwo modalName="packageModalTwo" />
        </div>
    )
}
