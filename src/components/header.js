import React, { Component } from 'react';
import styled from 'styled-components';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Container } from './boxes';


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

export const CalltoActionButton = styled.button`
    font-family: 'DM Sans', sans-serif;
    position: relative
    z-index: 1;
    background-color: white;
    margin: 10rem;
    border-radius: 5px;
    display: inline-block;
    align-item: center;
    padding: 1rem 1rem 1rem 1.2rem;
    cursor: pointer;
    border: 1px solid #000000;
    box-sizing: border-box;
    position: relative
    z-index: 1;
    transform: rotate(180deg);
    a {
        color: #000000;
        font-size: 1rem;
        text-decoration: none;
    }

    :hover {
        border: 3px solid black;
    }

    @media(max-width: 900px) {
        padding: 0.8rem 0.8rem 0.8rem 1rem;
        a {
            font-size: 0.8rem;      
        }
    }

    @media(max-width: 767px) {
        margin: 6rem 3rem 3rem 3rem;

    }

`


export class Header extends Component {
    render() {
        return (
            <header style={{ display: 'block', textAlign: 'center'}}>

                <Tagline> We are Status </Tagline>

                <SecondTagline> As the Status Ambassadors, we build, educate, promote, and contribute to the next generation of the Web </SecondTagline>

                <div className="ellipse-down">

                    <CalltoActionButton>

                        <Container><a href="https://our.status.im/" target="_blank" rel="noopener noreferrer">
                            Become an ambassador </a> <KeyboardArrowRightIcon /></Container>

                    </CalltoActionButton>

                </div>


            </header>

        );
    }
}


export default Header;