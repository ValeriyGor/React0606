import React from "react";
import './Content.css'
import Card from "../../Components/Card/Card";
import Aside from "../../Components/Aside/Aside";
import Footer from "../../Components/Footer/Footer";
import logo from '../../images/logo.svg';


class Contacts extends React.Component {
    render() {
        return (
            <div className="Content">
              <div className='page-content'>
                <div className='card-container'>
                  <Card title="Content 1" img={logo}/>
                  <Card title="Content 2" img={logo}/>
                  <Card title="Content 3" img={logo}/>
                  <Card title="Content 4" img={logo}/>
                  <Card title="Content 5" img={logo}/>
                  <Card title="Content 6" img={logo}/>
                </div>
                <Aside/>
              </div>
              <Footer/>
            </div>
            
        )
    }
}

export default Contacts