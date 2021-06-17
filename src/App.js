import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

// Pages
import Homepage from './pages/Homepage/Homepage'
import Reservation from './pages/Reservation/Reservation'
import Campaigns from './pages/Campaigns/Campaigns'
import CampaignsSingle from './pages/Campaigns/CampaignsSingle'
import PopularLocations from './pages/PopularLocations/PopularLocations'
function App() {
  return (
    <Router>
      <Header />        
          <Switch> 
            <Route exact path="/" component={Homepage}></Route>
            <Route path="/reservation" component={Reservation}></Route>
            <Route path="/campaigns" component={Campaigns}></Route>
            <Route path="/campaign" component={CampaignsSingle}></Route>
            <Route path="/popularlocations" component={PopularLocations}></Route>
          </Switch>
       <Footer />
    </Router>
  );
}

export default App;
