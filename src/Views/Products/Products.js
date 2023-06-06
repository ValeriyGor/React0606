import React from "react";
import Card from "../../Components/Card/Card";
import logo from '../../images/logo.svg';

class Products extends React.Component {
    render() {
        return (
            <div className="card-container">
                <Card title="Product 1" img={logo}/>
                <Card/>
                <Card title="Product 2"/>
                <Card/>
                <Card title="Product 3"/>
                <Card/>
            </div>
        )
    }
}

export default Products