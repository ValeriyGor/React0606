import React from 'react';
import './Card.css'
import logo from '../../logo.svg';
import Image from "../Image/Image"


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultTitle: "This is Component Card",
            inputData: "",
            product1: {
                price: 1000,
                title: 'Samsung',
            }
        }

        // this.mouseClick = this.mouseClick.bind(this)
    }

    render() {
        return (
            <div className="card">
                <Image src={this.props.img} imgAlt="cardImg" />
                <h3>{this.props.title ? this.props.title : this.state.defaultTitle}</h3>

                <p>{this.product1 && this.product1.price}</p>


                <h4>{this.state.inputData}</h4>
                <input type="text" onBlur={event => this.setState({inputData: event.target.value})}/>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae enim eum expedita fuga inventore ipsam molestias possimus qui quibusdam quos rem repellendus saepe sapiente, sunt tenetur ut? Labore, nostrum.</p>
                <button type="button" onClick={this.mouseClick}>Details</button>
            </div>
        )
    }

    mouseClick = () => {
        // this.defaultTitle = "This is Card Component"
        this.setState({
            defaultTitle: "This is new title"
        })
        console.log('Clicked')
    }
}

export default Card