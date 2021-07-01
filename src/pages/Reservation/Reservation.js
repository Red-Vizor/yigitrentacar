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
import { setHPT, setHPO } from '../../store/reservation/dateSlice'


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
        name: "İhtiyari Mali Mesuliyet Güvencesi (Orta Güvence Paketi) - EKONOMİK",
        price: 0,
        detail: "Günlük Yaşamda Yaşanabilinecek Trafik Kazalarında,Çarptığınız Araçtaki Hasar Kimi Zaman Trafik Sigortası Limitlerini Günlük Yaşamda Yaşanabilinecek Trafik Kazalarında,Çarptığınız Araçtaki Hasar Kimi Zaman Trafik Sigortası Limitlerini Sigortası Devreye Girip TÜRKİYE Sınırlarında Sigortalanan Kişiyi Koruma Altına Almaktadır."
    },
    {
        id: 2,
        name: "Mini Hasar Güvence Paketi - EKONOMİK",
        price: 0,
        detail: "Rapor Düzenlenmesi Veya Tutanak Tutulması Mümkün Olmayan,Tek Taraflı Hasarlar İçin Müşteriye 3000 TL'ye Kadar Beyanla Onarım Hakkı Sunan Güvence Paketidir.Cam-Ayna Güvence Paketi Dahilindedir."
    },
    {
        id: 3,
        name: "Tam Güvence Paketi - EKONOMİK",
        price: 0,
        detail: "İhtiyari Mali Mesuliyet Güvencesi, Mini Hasar Güvence Paketi, Ferdi Kaza Güvencesi (Hediye), Hayat Her Zaman Hoş Sürprizlerle Dolu Değildir.Ferdi Kaza Güvencesi Beklenmedik Bir Durumda Oluşabilecek Kazalarda , Sakatlık,Tedavi Masrafları,Tam Ve Kısmı Maluliyet,Günlük Hastane Tedavileri Olmak Üzere Kısmi Maluliyetleri Kapsar."
    },
    {
        id: 4,
        name: "İhtiyari Mali Mesuliyet Güvencesi (Orta Güvence Paketi) - ORTA",
        price: 0,
        detail: "Günlük Yaşamda Yaşanabilinecek Trafik Kazalarında,Çarptığınız Araçtaki Hasar Kimi Zaman Trafik Sigortası Limitlerini Günlük Yaşamda Yaşanabilinecek Trafik Kazalarında,Çarptığınız Araçtaki Hasar Kimi Zaman Trafik Sigortası Limitlerini Sigortası Devreye Girip TÜRKİYE Sınırlarında Sigortalanan Kişiyi Koruma Altına Almaktadır."
    },
    {
        id: 5,
        name: "Mini Hasar Güvence Paketi - ORTA",
        price: 0,
        detail: "Rapor Düzenlenmesi Veya Tutanak Tutulması Mümkün Olmayan,Tek Taraflı Hasarlar İçin Müşteriye 3000 TL'ye Kadar Beyanla Onarım Hakkı Sunan Güvence Paketidir.Cam-Ayna Güvence Paketi Dahilindedir."
    },
    {
        id: 6,
        name: "Tam Güvence Paketi - ORTA",
        price: 0,
        detail: "İhtiyari Mali Mesuliyet Güvencesi, Mini Hasar Güvence Paketi, Ferdi Kaza Güvencesi (Hediye), Hayat Her Zaman Hoş Sürprizlerle Dolu Değildir.Ferdi Kaza Güvencesi Beklenmedik Bir Durumda Oluşabilecek Kazalarda , Sakatlık,Tedavi Masrafları,Tam Ve Kısmı Maluliyet,Günlük Hastane Tedavileri Olmak Üzere Kısmi Maluliyetleri Kapsar."
    },
    {
        id: 7,
        name: "İhtiyari Mali Mesuliyet Güvencesi (Orta Güvence Paketi) - PRESTİJ",
        price: 0,
        detail: "Günlük Yaşamda Yaşanabilinecek Trafik Kazalarında,Çarptığınız Araçtaki Hasar Kimi Zaman Trafik Sigortası Limitlerini Günlük Yaşamda Yaşanabilinecek Trafik Kazalarında,Çarptığınız Araçtaki Hasar Kimi Zaman Trafik Sigortası Limitlerini Sigortası Devreye Girip TÜRKİYE Sınırlarında Sigortalanan Kişiyi Koruma Altına Almaktadır."
    },
    {
        id: 8,
        name: "Mini Hasar Güvence Paketi - PRESTİJ",
        price: 0,
        detail: "Rapor Düzenlenmesi Veya Tutanak Tutulması Mümkün Olmayan,Tek Taraflı Hasarlar İçin Müşteriye 3000 TL'ye Kadar Beyanla Onarım Hakkı Sunan Güvence Paketidir.Cam-Ayna Güvence Paketi Dahilindedir."
    },
    {
        id: 9,
        name: "Tam Güvence Paketi - PRESTİJ",
        price: 0,
        detail: "İhtiyari Mali Mesuliyet Güvencesi, Mini Hasar Güvence Paketi, Ferdi Kaza Güvencesi (Hediye), Hayat Her Zaman Hoş Sürprizlerle Dolu Değildir.Ferdi Kaza Güvencesi Beklenmedik Bir Durumda Oluşabilecek Kazalarda , Sakatlık,Tedavi Masrafları,Tam Ve Kısmı Maluliyet,Günlük Hastane Tedavileri Olmak Üzere Kısmi Maluliyetleri Kapsar."
    },
    {
        id: 10,
        name: "İhtiyari Mali Mesuliyet Güvencesi (Orta Güvence Paketi) - PREMIUM",
        price: 0,
        detail: "Günlük Yaşamda Yaşanabilinecek Trafik Kazalarında,Çarptığınız Araçtaki Hasar Kimi Zaman Trafik Sigortası Limitlerini Günlük Yaşamda Yaşanabilinecek Trafik Kazalarında,Çarptığınız Araçtaki Hasar Kimi Zaman Trafik Sigortası Limitlerini Sigortası Devreye Girip TÜRKİYE Sınırlarında Sigortalanan Kişiyi Koruma Altına Almaktadır."
    },
    {
        id: 11,
        name: "Mini Hasar Güvence Paketi - PREMIUM",
        price: 0,
        detail: "Rapor Düzenlenmesi Veya Tutanak Tutulması Mümkün Olmayan,Tek Taraflı Hasarlar İçin Müşteriye 3000 TL'ye Kadar Beyanla Onarım Hakkı Sunan Güvence Paketidir.Cam-Ayna Güvence Paketi Dahilindedir."
    },
    {
        id: 12,
        name: "Tam Güvence Paketi - PREMIUM",
        price: 0,
        detail: "İhtiyari Mali Mesuliyet Güvencesi, Mini Hasar Güvence Paketi, Ferdi Kaza Güvencesi (Hediye), Hayat Her Zaman Hoş Sürprizlerle Dolu Değildir.Ferdi Kaza Güvencesi Beklenmedik Bir Durumda Oluşabilecek Kazalarda , Sakatlık,Tedavi Masrafları,Tam Ve Kısmı Maluliyet,Günlük Hastane Tedavileri Olmak Üzere Kısmi Maluliyetleri Kapsar."
    },
    {
        id: 13,
        name: "İhtiyari Mali Mesuliyet Güvencesi (Orta Güvence Paketi) - BUSINESS",
        price: 0,
        detail: "Günlük Yaşamda Yaşanabilinecek Trafik Kazalarında,Çarptığınız Araçtaki Hasar Kimi Zaman Trafik Sigortası Limitlerini Günlük Yaşamda Yaşanabilinecek Trafik Kazalarında,Çarptığınız Araçtaki Hasar Kimi Zaman Trafik Sigortası Limitlerini Sigortası Devreye Girip TÜRKİYE Sınırlarında Sigortalanan Kişiyi Koruma Altına Almaktadır."
    },
    {
        id: 14,
        name: "Mini Hasar Güvence Paketi - BUSINESS",
        price: 0,
        detail: "Rapor Düzenlenmesi Veya Tutanak Tutulması Mümkün Olmayan,Tek Taraflı Hasarlar İçin Müşteriye 3000 TL'ye Kadar Beyanla Onarım Hakkı Sunan Güvence Paketidir.Cam-Ayna Güvence Paketi Dahilindedir."
    },
    {
        id: 15,
        name: "Tam Güvence Paketi - BUSINESS",
        price: 0,
        detail: "İhtiyari Mali Mesuliyet Güvencesi, Mini Hasar Güvence Paketi, Ferdi Kaza Güvencesi (Hediye), Hayat Her Zaman Hoş Sürprizlerle Dolu Değildir.Ferdi Kaza Güvencesi Beklenmedik Bir Durumda Oluşabilecek Kazalarda , Sakatlık,Tedavi Masrafları,Tam Ve Kısmı Maluliyet,Günlük Hastane Tedavileri Olmak Üzere Kısmi Maluliyetleri Kapsar."
    }
   ]


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

    useEffect(() => {
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
                <Package1 pack={packageOne} packages="1" modalName="packageModalOne" />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Package2 pack={packageOne} packages="2" modalName="packageModalTwo" />
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
