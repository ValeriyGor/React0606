import React from 'react';
import './Hero.css';
import Intro from '../../Components/Intro/Intro'
import articlePicture from '../../images/road_to_FrontEnd.jpg'

class Hero extends React.Component {

    render() {
        return (
            <>
                {/*<h1 className='hero-header'>Welcome to the FrontEnd</h1>*/}
                <Intro
                    key={Math.random()}
                    img={articlePicture}
                    author='Batalshikov Dima'
                />
            </>
        );
    }
}

export default Hero;