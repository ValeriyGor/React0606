import React from "react";

class Image extends React.Component {
    render() {
        return (
            <img src={this.props.src} alt={this.props.imgAlt}/>
        )
    }
}

export default Image