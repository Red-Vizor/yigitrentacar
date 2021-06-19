import React from 'react'
import './reservation.css'
import ReservationHead from '../../Components/Header/ReservationHead'
import Cars from './Cars'
import Package from './Package'
import ReservationForm from './ReservationForm'

import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                                <p className="h7">Bodrum, Yalıkavak </p>
                                <p className="h7">21.06.2021 <img src="./assets/icons/arrow-circle.svg" className="my-auto ms-1 h-50" /> 21.06.2021</p>
                                <img src="./assets/icons/check-green.svg" className="check position-absolute" />
                                <a href="#" className="checked-link position-absolute">Düzenle</a>
                            </div>
                        } {...changeProps(0)} />
                        <Tab label={
                            <div className="tab-button text-start py-2">
                                <span className="h6 bold">2.ARACINIZ </span>
                                <p className="h7">Mercedes E200 AMG  <span className="bold ms-2">340,37₺ <img src="./assets/icons/rightic.svg" className="my-auto ms-3 h-25" /> </span>  </p>
                                <p className="h7">Dizel Otomatik</p>
                            </div>
                        } {...changeProps(1)} />
                        <Tab label={
                            <div className="tab-button text-start py-2">
                                <span className="h6 bold">3. GÜVENCE PAKETLERİ </span>
                                <p className="h7">PAKET DETAYLARINI <img src="./assets/icons/rightic.svg" className="my-auto ms-5 h-25" /> <br /> SEÇİN</p>
                            </div>
                        } {...changeProps(2)} />
                        <Tab label={
                            <div className="tab-button text-start py-2">
                                <span className="h6 bold">4. EK ÜRÜNLER </span>
                                <p className="h7">Bodrum, Yalıkavak <img src="./assets/icons/rightic.svg" className="my-auto ms-5 h-25" /></p>
                                <p className="h7">21.06.2021 <img src="./assets/icons/arrow-circle.svg" className="my-auto ms-1 h-50" /> 21.06.2021</p>
                            </div>
                        } {...changeProps(3)} />
                        <Tab label={
                            <div className="tab-button text-start py-2">
                                <span className="h6 bold">5. REZERVASYON </span>
                                <p className="h7">Bodrum, Yalıkavak</p>
                                <p className="h7">21.06.2021 <img src="./assets/icons/arrow-circle.svg" className="my-auto ms-1 h-50" /> 21.06.2021</p>
                            </div>
                        } {...changeProps(4)} />
                    </Tabs>
                </div>
            </div>

            <TabPanel value={value} index={1}>
                <p>buraya son sayfayı ekle</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Cars />
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


        </div>
    )
}
