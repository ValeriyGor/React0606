import React from "react";
import './FamousPeople.css'
import Card from "../../Components/Card/Card";
import Rock from '../../images/rock.jpeg';

class FamousPeople extends React.Component {
    render() {
        return (
            <div className="famousPeople">
                <h1>FamousPeople</h1>
                <div className="card-container">
                    <Card
                        title="Famous People"
                        img={Rock}
                    />
                    <Card
                        title="Famous People"
                        img={Rock}
                    />
                    <Card
                        title="Famous People"
                        img={Rock}
                    />
                </div>
            </div>
        )
    }
}

export default FamousPeople