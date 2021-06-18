import React from 'react'

import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { PersonalForm, CorporateForm } from '../../Components'

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

export default function Register() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <section className="register-page container py-5">
            <h4 className="text-center bold">
                YİĞİT RENT A CAR' A ÜYE OLUN
            </h4>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="tab-bar my-4" centered>
                <Tab label="BİREYSEL" {...changeProps(0)} />
                <Tab label="KURUMSAL" {...changeProps(1)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <PersonalForm />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CorporateForm bgColor="transparent"/>
            </TabPanel>
        </section>
    )
}
