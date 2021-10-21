import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/components/Home/Dashboard';
import Login from '../src/components/Login/Login';


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/' exact component={Login}/>
         <Route path='/signin' component={Login}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
