import React, { Component } from 'react';
import styled from 'styled-components'
import { Container } from './boxes';


const Text = styled.section`
    width: 580px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 140.8%;
    text-align: center;
    color: #2C2C2C;
    padding-top: 10rem;
    margin: auto;
`

const Link = styled.div`
    text-align: center;
    margin-top: 3rem;
    font-size: 1.2rem;
    text-decoration: none !important;
    position: relative
    z-index: 1;
    a, a:visited {
        color: #4F6CDE;
        text-decoration: none !important;
    }
`

class People extends Component {
    render() {
        return (
            <div style={{ display: 'block', marginTop: '3rem' }}>
                
                <div className="ellipse-up">

                    <Container><Text>We are spread across the world <br /> with different backgrounds and areas of expertise</Text></Container>

                    <Link> <a href="https://status.im" target="_blank" rel="noopener noreferrer"> Join Us </a> </Link>

                </div>

                <div>

                    <ul className="photo-row">
                        <li className="list"><img src={require('../images/brian.jpg')} className="profile" alt="Brian XV" /></li>
                        <li className="list"><img src={require('../images/danieltbar.jpg')} className="profile" alt="Daniel Bar" /></li>
                        <li className="list"><img src={require('../images/eduardo.jpg')} className="profile" alt="Eduardo Garza" /></li>
                        <li className="list"><img src={require('../images/enrico.jpg')} className="profile" alt="Enrico Del Fante" /></li>
                        <li className="list"><img src={require('../images/kris.jpg')} className="profile" alt="Kris Calabio" /></li>
                        <li className="list"><img src={require('../images/prabhleen.jpg')} className="profile" alt="Prabhleen Singh" /></li>
                        <li className="list"><img src={require('../images/sebastian.jpg')} className="profile" alt="Sebastian Moonjava" /></li>
                        <li className="list"><img src={require('../images/nanda.jpg')} className="profile" alt="Sourav Kumar Nanda" /></li>
                        <li className="list"><img src={require('../images/warsoverjohn.jpg')} className="profile" alt="Warsoverjohn" /></li>
                        <li className="list"><img src={require('../images/yalu.jpg')} className="profile" alt="Yalu" /></li>
                    </ul>

                </div>

            </div>

        );
    }
}


export default People;