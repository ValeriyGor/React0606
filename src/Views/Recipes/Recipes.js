import React from 'react'
import './Recipes.css'
import Card from "../../Components/Card/Card";
import brownie from '../../images/brownie.jpg';
import bakedChicken from '../../images/baked-chicken.jpg';
import mushrooms from '../../images/mushrooms.jpg';
import pizza from '../../images/pizza.jpg';
import fishballs from '../../images/fishballs.jpg';
import paliushky from '../../images/paliushky.jpg';


class Recipes extends React.Component {
    render() {
        return (
            <div className="recipes">
                <h1>Recipes</h1>
                <div className="card-container">
                    <Card title="Brownie with orange peel and nut praline" img={brownie} />
                    <Card title="Baked chicken thighs with plum sauce" img={bakedChicken} />
                    <Card title="Mushrooms with feta and garlic" img={mushrooms} />
                    <Card title="Ukrainian pizza" img={pizza} />
                    <Card title="Fishballs" img={fishballs} />
                    <Card title="Paliushky (potato fingers)" img={paliushky} />
                </div>
                <p>© Copy - Євген Клопотенко 2023</p>
            </div>
                
        )
    }
}

export default Recipes