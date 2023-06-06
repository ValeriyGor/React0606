import React from 'react';
import './Cartoons.css'
import Card from '../../Components/Card/Card';
import mario from '../../images/mario.jpg'
import spiderman from '../../images/spiderman.jpg'
import elemental from '../../images/elemental.jpg'

class Cartoons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        defaultTitle: "This is Component Card",
        inputData: "",
        }
    }

  render() {
    return(
      <div>
        <h1>Мульфільми 2023 року</h1>
        <div className='card-container'></div>
        <Card title="Super Mario Bros." img={mario}/>
        <Card title="Людина Павук: Навколо всесвіту" img={spiderman}/>
        <Card title="Елементаль" img={elemental}/>
      </div>
      

      
    )
  }
}

export default Cartoons