import React from 'react';
import Home from './components/Home';
import FAQ from './components/FAQ'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/FAQ' element={<FAQ/>} />
        </Routes>
      </Router>
      
    );
  }
}

export default App;