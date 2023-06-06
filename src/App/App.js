import React from 'react';
import Header from "../Components/Header/Header";
import Analytics from "../Views/Analytics/Analytics";
import Contacts from "../Views/Contacts/Contacts";
import Products from "../Views/Products/Products";
import FamousPeople from "../Views/FamousPeople/FamousPeople";
import Films from "../Views/Films/Films";
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
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
                      <Route exact path="/famouspeople" element={<FamousPeople/>}/>
                      <Route exact path="/films" element={<Films/>}/>
                      <Route exact path="/cartoons" element={<Cartoons/>}/>
                  </Routes>

              </div>
          </Router>
      )
  }
}

export default App
