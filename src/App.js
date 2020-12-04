
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home'

import { history } from './store';


 
export default function App() {
	return (
	
	  <Router  history={history}>
		<Switch>
		 <Route path="/" component={Home}/>
		</Switch>
	  </Router>
	
   );
}