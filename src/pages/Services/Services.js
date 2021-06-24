import React from 'react'
import './services.css'
import CorporateServices from './CorporateServices'
import PersonalServices from './PersonalServices'
import DriverServices from './DriverServices'

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



function Services() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="services">
            <div className="menu-bar container pt-3 my-auto" style={{ height: "55px", fontWeight: "bold" }}>
                <p >Anasayfa /  Hizmetler</p>
            </div>

            <div className="policies-jumbotron text-center position-relative pb-5" style={{  backgroundColor: "#CCCCCC" }}>
                <h4 className="py-5 bold">HİZMETLER</h4>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="tab-bar shadow-light" centered >
                    <Tab label="BİREYSEL KİRALAMA" {...changeProps(0)} />
                    <Tab label="KURUMSAL KİRALAMA" {...changeProps(1)} />
                    <Tab label="ŞÖFÖRLÜ ARAÇ KİRALAMA & TRANSFER" {...changeProps(2)} />
                   
                </Tabs>
            </div>

            <section className="policy-area my-4 ">
                <TabPanel value={value} index={0}>
                   <PersonalServices />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CorporateServices />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <DriverServices />
                </TabPanel>
               
                
            </section>



        </div>
    )
}

export default Services
