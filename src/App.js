import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Components/Header/Header'
// Pages
import Homepage from './pages/Homepage/Homepage'

function App() {
  return (
    <Router>
      <Header />        
          <Switch> 
            <Route exact path="/" component={Homepage}></Route>
          </Switch>
       
    </Router>
  );
}

export default App;
