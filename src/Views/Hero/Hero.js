import React from 'react';
import './Hero.css';
import Intro from '../../Components/Intro/Intro'
import articlePicture from '../../images/road_to_FrontEnd.jpg'

class Hero extends React.Component {
    render() {
        return (
            <>
                <h1>Welcome to the FrontEnd HEll !)</h1>
                <Intro
                    key={Math.random()}
                    img={articlePicture}
                />
            </>
        );
    }
}

export default Hero;