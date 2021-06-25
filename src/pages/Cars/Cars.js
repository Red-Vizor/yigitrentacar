import React from 'react'
import './cars.css'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { CarCard } from '../../Components/'
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

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <section className="cars">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p>Anasayfa  /  Tüm Araçlar </p>
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

            <div className="car-areas ms-5 mb-5">
                <TabPanel value={value} index={0}>
                    <div className="row">
                        <div className="col-lg-4  col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4  col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4  col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4  col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4  col-md-6">
                            <CarCard />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CarCard />
                        </div>
                    </div>
                </TabPanel>
            </div>
        </section>
    )
}
