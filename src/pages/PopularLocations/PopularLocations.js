import React from 'react'
import './popularlocations.css'
import PopularLocationsCard from './PopularLocationsCard'
import PopularLocationSingle from './PopularLocationSingle'
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


function PopularLocations() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    return (
        <div className="popular-location-area">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p><a href="/" className="text-dark">Anasayfa</a>   / Lokasyonlar</p>
            </div>
            <div className="campaigns-jumbotron position-relative"
                style={{ height: "346px", backgroundImage: "linear-gradient(rgb(0, 0, 0, 0.3), rgb(0, 0, 0, 0.3)), url('./assets/images/jumbotron/locations-jumbotron.png')" }}>
                <h1>POPÜLER LOKASYONLAR</h1>

                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="tab-bar shadow-light" centered>
                    <Tab label="TÜM LOKASYONLAR" {...changeProps(0)} />
                    <Tab label="İSTANBUL" {...changeProps(1)} />
                    <Tab label="İZMİR" {...changeProps(2)} />
                    <Tab label="BODRUM" {...changeProps(3)} />
                </Tabs>
            </div>



            <div className="popular-location-cardpage ">
            <div className="container my-5">
                <TabPanel value={value} index={0}>
                    <div className="row ">
                        <div className="col-lg-6">
                            <PopularLocationsCard imageUrl="./assets/images/location1.png" />
                        </div>
                        <div className="col-lg-6">
                            <PopularLocationsCard imageUrl="./assets/images/location2.png" />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="row">
                        <div className="col-lg-6">
                            <PopularLocationsCard imageUrl="./assets/images/location2.png" />
                        </div>
                        <div className="col-lg-6">
                            <PopularLocationsCard imageUrl="./assets/images/location1.png" />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="row">
                        <div className="col-lg-6">
                            <PopularLocationsCard imageUrl="./assets/images/location1.png" />
                        </div>
                        <div className="col-lg-6">
                            <PopularLocationsCard imageUrl="./assets/images/location2.png" />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className="row">
                        <div className="col-lg-6">
                            <PopularLocationsCard imageUrl="./assets/images/location1.png" />
                        </div>
                        <div className="col-lg-6">
                            <PopularLocationsCard imageUrl="./assets/images/location2.png" />
                        </div>
                    </div>
                </TabPanel>


            </div>
            </div>

        </div>
    )
}

export default PopularLocations
