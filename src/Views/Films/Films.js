import React from 'react'
import './Films.css'
import Card from "../../Components/Card/Card";
import firstImg from '../../images/films1.png';
import secondImg from '../../images/films2.png';
import thirdImg from '../../images/films3.jpg';

class Products extends React.Component {
    render() {
        return (
            <div className="films">
                <h1>Films</h1>
<div className="card-container">
               
               <Card title="Films 1" img={firstImg}/>
               <Card title="Films 2" img={secondImg} />
               <Card title="Films 3"  img={thirdImg}/>
               <Card title="Films 4" img={firstImg} />
               <Card title="Films 5" img={secondImg}/>
               <Card title="Films 5" img={thirdImg}/>
        
           </div>
            </div>
            
        )
    }
}

export default Products