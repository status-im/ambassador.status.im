import React, { Component } from 'react';
import styled from 'styled-components'

const Tagline = styled.section`
    font-style: normal;
    font-weight: normal;
    font-size: 2.5rem;
    line-height: 47px;
    text-align: center;
    color: #2C2C2C;
    margin-top: 3rem;
`

const SecondTagline = styled.section`
    width: 580px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 140.8%;
    text-align: center;
    color: #2C2C2C;
    padding-top: 2rem;
    margin: auto;
`

const CalltoActionButton = styled.button`
    margin: 3rem;
    color: #000000;
    border-radius: 5px;
    display: inline-block;
    font-size: 1rem;
    padding: 0.5rem 1.2rem 0.5rem 1.2rem;
    a {
        color: white !important;
        font-size: 1rem;
    }
`

const Ellipse = styled.div`
    text-align: center;
    width: 100%;
    height: 250px;
    border-radius: 50% / 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border: 1px solid #A8A8A8;
    border-color: transparent #A8A8A8 #A8A8A8;
    box-sizing: border-box;
`


class Header extends Component {
    render() {
        return (
            <header style={{ display: 'block', textAlign: 'center'}}>

                    <Tagline>
                        We are Status
                    </Tagline>

                    <SecondTagline>
                        As the Status Ambassadors, we build, educate, promote, and contribute to the next generation of the Web
                    </SecondTagline>

                    <Ellipse>
                        <CalltoActionButton>
                            Become an Ambassador
                        </CalltoActionButton>
                    </Ellipse>

            </header>

        );
    }
}


export default Header;