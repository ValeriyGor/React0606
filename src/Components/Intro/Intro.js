import React from 'react';
import './Intro.css'

class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postDate:
                new Date(Date.now()).getFullYear()
                + ":"
                + new Date(Date.now()).getMonth()
        }
    }

    render() {
        return (
            <article className='hero-article'>
                <section className='hero-article__header'>
                    <h1 className='hero-article__title'>My way to FrontEnd begin!</h1>
                    <span className='hero-article__portDate'>{this.state.postDate}</span>
                </section>
                <section className='hero-article__body'>
                    <div className='hero-article__contect'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Assumenda doloribus dolorum eveniet facilis fuga hic in inventore,
                            provident quia quos ratione saepe velit voluptate! Eaque ipsa, quis.
                            Consectetur, eaque, ipsam?
                        </p>
                        <span className='hero-article__author'></span>
                    </div>
                    <div className='hero-article__image'>
                        <img src={this.props.img} alt="bridge in the forest picture"/>
                    </div>
                </section>

            </article>
        )
    }
}

export default Intro