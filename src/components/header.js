import React, { Component } from 'react';
import styled from 'styled-components';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Container } from './boxes';
import Fade from 'react-reveal/Fade';

const Tagline = styled.section`
    font-style: normal;
    font-weight: normal;
    font-size: 2.5rem;
    line-height: 47px;
    text-align: center;
    color: #2C2C2C;
    margin-top: 3rem;

    @media(max-width: 900px) {
        font-size: 2rem;
    }

    @media(max-width: 767px) {
        font-size: 1.5rem;
    }

`

const SecondTagline = styled.section`
    width: 580px;
    font-style: normal;
    font-weight: normal;
    padding: 0 1.2rem 0 1.2rem;
    font-size: 24px;
    line-height: 140.8%;
    text-align: center;
    color: #2C2C2C;
    padding-top: 2rem;
    margin: auto;

    @media(max-width: 900px) {
        font-size: 20px;
        width: 70vw;
    }

    @media(max-width: 767px) {
        font-size: 16px;
    }

`

const CalltoActionButton = styled.button`
    font-family: 'DM Sans', sans-serif;
    position: relative
    z-index: 1;
    background-color: white;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    padding: 1rem 1rem 1rem 1.2rem;
    cursor: pointer;
    border: 1px solid #000000;
    box-sizing: border-box;
    transform: rotate(180deg);
    color: #000000;
    font-size: 1rem;

    :hover {
        border: 3px solid black;
    }

    @media(max-width: 900px) {
        padding: 0.8rem 0.8rem 0.8rem 1rem;
        font-size: 0.8rem;      
    }
`

var locale = navigator.userLanguage || (navigator.languages.slice(0, 2) && navigator.languages[0].slice(0, 2)) || "en";

function becomeAmbassador({ locale }){
    if(locale === 'zh'){
        return (
            <Container className="cta-top"><a href="mailto:ambassador@status.im?subject=Status Ambassador Application&body=Please find the application form at https://github.com/status-im/ambassador.status.im/blob/master/application-form.md" target="_blank" rel="noopener noreferrer"><CalltoActionButton>
                Become an ambassador <KeyboardArrowRightIcon /></CalltoActionButton></a> </Container>
        )
    }
    else{
        return (
            <Container className="cta-top"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdhMBGfCRQ-CuFhB3sFFm9MBtsQd6kJybkGI2M-JqpXOrY2pA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"><CalltoActionButton>
                Become an ambassador <KeyboardArrowRightIcon /></CalltoActionButton></a> </Container>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <header style={{ display: 'block', textAlign: 'center'}}>

                <Tagline> We are Status </Tagline>

                <SecondTagline> As the Status Ambassadors, we build, educate, promote, and contribute to the next generation of the Web </SecondTagline>

                <div className="ellipse-down">

                    <Fade left>

                        { becomeAmbassador({locale}) }

                    </Fade>
                </div>


            </header>

        );
    }
}


export default Header;