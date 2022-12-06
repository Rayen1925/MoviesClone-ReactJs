import React, { useEffect } from 'react';

import Landing from './components/Landing';
import 'antd/dist/antd.css'; 
import SingleMovie from './components/SingleMovie';
import {BrowserRouter as Router  , Route , Switch} from  'react-router-dom' 
import Navbar from './components/Navbar';


function App() {

 



  return (
    <div>
      <Navbar />

      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/movie/:id" component={SingleMovie} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
