import React from 'react';
import './Intro.scss'

class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postDate:
                "creation date: "
                +new Date(Date.now()).getFullYear()
                + "/"
                + new Date(Date.now()).getDate()
        }
    }

    render() {
        return (
            <article className='hero-article'>
                <div className='hero-article__container'>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Assumenda doloribus dolorum eveniet facilis fuga hic in inventore,
                                provident quia quos ratione saepe velit voluptate! Eaque ipsa, quis.
                                Consectetur, eaque, ipsam?
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Assumenda doloribus dolorum eveniet facilis fuga hic in inventore,
                                provident quia quos ratione saepe velit voluptate! Eaque ipsa, quis.
                                Consectetur, eaque, ipsam?
                            </p>
                            <span className='hero-article__author'>
                                {this.props.author}
                            </span>
                        </div>
                        <div className='hero-article__image'>
                            <img src={this.props.img} alt="bridge in the forest picture"/>
                        </div>
                    </section>
                </div>
            </article>
        )
    }
}

export default Intro