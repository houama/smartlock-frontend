import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Bookings from './pages/Bookings/Bookings';
import Rooms from './pages/Rooms/Rooms';
import Nodes from './pages/Nodes/Nodes';


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/' exact component={Dashboard}/>
         <Route path='/signin' component={Login}/>
         <Route path='/bookings' component={Bookings}/>
         <Route path='/rooms' component={Rooms}/>
         <Route path='/nodes' component={Nodes}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
