import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import RecordingSetup from './Pages/RecordingSetup/RecordingSetup';
import Home from './Pages/Home/Home';
import Data from './Pages/Data/Data';
import People from './Pages/People/People';
import Publication from './Pages/Publication/Publication';
import Download from './Pages/Download/Download';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (

    <div className="main-container">
            
      <Router>
        {/* <div className="App">
          <header className="App-header">  
          </header>
        </div> */}
      
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/recording_setup" exact>
            <RecordingSetup/>
          </Route>
          <Route path="/data" exact>
            <Data/>
          </Route>
          <Route path="/publication" exact>
            <Publication/>
          </Route>
          <Route path="/people" exact>
            <People/>
          </Route>
          <Route path="/download" exact>
            <Download/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      </Router>
    </div>
   );

}

export default App;
