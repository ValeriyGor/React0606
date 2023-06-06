import React from 'react';
import Header from "../Components/Header/Header";
// import Card from "../Components/Card/Card";
import Analytics from "../Views/Analytics/Analytics";
import Contacts from "../Views/Contacts/Contacts";
import Products from "../Views/Products/Products";
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Card from '../Views/Cartoons/Cartoons';
import Cartoons from '../Views/Cartoons/Cartoons';

class App extends React.Component {
  render() {
      return (
          <Router>
              <div className="App">
                  <Header altlogo="logoComputed"/>


                  <Routes>
                      <Route exact path="/" element={<Products/>}/>
                      <Route exact path="/contacts" element={<Contacts/>}/>
                      <Route exact path="/analytics" element={<Analytics/>}/>
                      <Route exact path="/cartoons" element={<Cartoons/>}/>
                  </Routes>

              </div>
          </Router>
      )
  }
}

export default App
