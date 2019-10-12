import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from './boxes';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Carousel } from 'react-responsive-carousel';


const Line = styled.div`
    width: 35%;
    border-bottom: 1px solid #A8A8A8;

    @media(max-width: 1100px) {
        width: 34%;
    }

    @media(max-width: 770px) {
        position: absolute;
        width: 30%;
        left: ${props => { if (props.left) { return "0" } }};
        right: ${props => { if (props.right) { return "0" } }};
    }
`

const Title = styled.div`
    width: 15%;
    font-size: 1.8rem;
    color: #2C2C2C;
    margin: 0 2.5rem 0 2.5rem;
    text-align: center;

    @media(max-width: 1024px) {
        font-size: 1rem;
    }
`

const Box = styled.div`
    background: white;
    width: 250px;
    height: 400px;
    margin: 5% 1.5% 2% 1.5%;
    border: 1px solid #A8A8A8;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 8px;
    float: left;
    font-size: 1.5rem;

    @media(max-width: 1160px) {
        width: 220px;
        height: 360px;
    }

    @media(max-width: 1024px) {
        background: black;
        border: none;
        float: none;
        text-align: center;
        width: auto;
        height: auto;
        padding-bottom: 2rem;
        margin: auto;
    }

    hr {
        width: 80px;
        border: 1px solid #A8A8A8;
        margin-top: 40px;
    }

    img {
        display: block;
        margin-top: 60px;
        margin-left: auto;
        margin-right: auto;

        @media(max-width: 1160px) {
            margin-top: 40px;
        }        
        @media(max-width: 1024px) {
            filter: brightness(0) invert(1);
            width: auto !important;
        }     
    } 
`

// Category in the boxes
const Category = styled.p`
    font-size: 1.2rem;
    text-align: center;
    color: black;
    margin-top: 50px;
    font-weight: bold;

    @media(max-width: 1160px) {
        margin-top: 30px;
    }

    @media(max-width: 1024px) {
        color: white;
    }
`

// details in the boxes
const Text = styled.section`
    font-weight: normal;
    font-size: 0.85rem;
    line-height: 180%;
    text-align: left;
    color: black;
    padding: 0.5rem 2rem 0 2rem;
    margin: auto;

    @media(max-width: 1160px) {
        font-size: 0.8rem;
    }

    @media(max-width: 1024px) {
        text-align: center;
        font-size: 1rem;
        color: white;
        padding: 0.5rem 2rem 1rem 2rem;
    }
`

// CTA below the boxes
const BecomeAmbassador = styled.button`

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
    color: #000000;
    font-size: 1rem;
    
    :hover {
        border: 1px solid grey;
        background: grey;
        a {
            color: white;
        }
        color: white;
    }

    @media(max-width: 1024px) {
       background: black;
       color: white;
       a {
           color: white;
       }
    }
`

// Box content
const funding = 
    <Box className="funding-bg">
        <img src={require('../images/funding.png')} alt="Status Logo" height="90px" />
        <Category>Funding</Category>
        <hr />
        <Text>Receive funding to host meetups, workshops, and projects</Text>
    </Box>

const support = 
    <Box className="support-bg">
        <img src={require('../images/support.png')} alt="Status Logo" height="90px" />
        <Category>Access & Support</Category>
        <hr />
        <Text>Help from core contributors on technical, organizational, and other projects</Text>
    </Box>

const rewards = 
    <Box className="rewards-bg">
        <img src={require('../images/rewards.png')} alt="Status Logo" height="90px" />
        <Category>Rewards</Category>
        <hr />
        <Text>Get some cool Status swag and earn SNT</Text>
    </Box>

const future = 
    <Box className="future-bg">
        <img src={require('../images/future.png')} alt="Status Logo" height="90px" />
        <Category>Build the future</Category>
        <hr />
        <Text>Active contribution in building the next generation of the internet</Text>
    </Box>

export class Benefits extends Component {
    
    render() {
        return (
            <ScrollableAnchor id={'benefits'}>
                <div style={{ marginTop: '3rem', paddingTop: '1rem'}}>
                    
                        <Container style={{ marginBottom: '2rem'}}><Line left/><Title> Benefits </Title><Line right/></Container>

                        <Container className="box-display">
                            {funding}
                            {support}
                            {rewards}
                            {future}
                        </Container>

                        <Carousel className="carousel-display carousel-center" showThumbs={false} showArrows={false} showStatus={false}>
                            {funding}
                            {support}
                            {rewards}
                            {future}
                        </Carousel>      

                        <Container style={{ marginTop: '1rem'}}>
                        <Container style={{ marginTop: '1rem' }}><a href="http://bit.ly/status-ambassador-application" target="_blank" rel="noopener noreferrer"><BecomeAmbassador>
                            Become an ambassador  <KeyboardArrowRightIcon /></BecomeAmbassador></a> </Container>
                        </Container>
                    
                </div>
            </ScrollableAnchor>
        );
    }
}

export default Benefits;