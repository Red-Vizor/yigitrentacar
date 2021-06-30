import React from 'react'
import './campaigns.css'
import CampaignsCard from './CampaignsCard'
import CampaignsSingle from './CampaignsSingle'
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


function Campaigns() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const width = window.innerWidth;


    return (
        <div className="campaigns">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p><a href="/" className="text-dark">Anasayfa</a>   / Kampanyalar</p>
            </div>
            <div className="campaigns-jumbotron position-relative mb-5 "
                style={{ height: "346px", backgroundImage: "linear-gradient(rgb(232, 84, 30,0.4), rgb(232, 84, 30,0.4)), url('./assets/images/jumbotron/compaigns-jumbotron.png')" }}>
                <h1>KAMPANYALAR</h1>


                {
                    width < 991 ? <Tabs value={value} onChange={handleChange} orientation="vertical" aria-label="simple tabs example" className="tab-bar shadow-light tab-areas mobile-tab-bar" centered >
                        <Tab label="YİĞİT KAMPANYALARI" {...changeProps(0)} />
                        <Tab label="YİĞİT İŞ BİRLİĞİ KAMPANYALARI" {...changeProps(1)} />
                        <Tab label="YİĞİT KURUMSAL KAMPANYALARI" {...changeProps(2)} />
                    </Tabs> :
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="tab-bar shadow-light tab-areas web-tab-bar" centered >
                            <Tab label="YİĞİT KAMPANYALARI" {...changeProps(0)} />
                            <Tab label="YİĞİT İŞ BİRLİĞİ KAMPANYALARI" {...changeProps(1)} />
                            <Tab label="YİĞİT KURUMSAL KAMPANYALARI" {...changeProps(2)} />
                        </Tabs>
                }








            </div>


            <div className="campaigns-cardpage" >
                <div className="container" >
                    <TabPanel value={value} index={0}>
                        <div className="row">
                            <div className="col-lg-6">
                                <CampaignsCard imageUrl="./assets/images/campaign-car.png" />
                            </div>
                            <div className="col-lg-6">
                                <CampaignsCard imageUrl="./assets/images/campaign-car.png" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="row">
                            <div className="col-lg-6">
                                <CampaignsCard imageUrl="./assets/images/campaign-car.png" />
                            </div>
                            <div className="col-lg-6">
                                <CampaignsCard imageUrl="./assets/images/campaign-car.png" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="row">
                            <div className="col-lg-6">
                                <CampaignsCard imageUrl="./assets/images/campaign-car.png" />
                            </div>
                            <div className="col-lg-6">
                                <CampaignsCard imageUrl="./assets/images/campaign-car.png" />
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </div>


        </div>
    )
}

export default Campaigns

