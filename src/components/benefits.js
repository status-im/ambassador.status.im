import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from './boxes';
import { CalltoActionButton } from './header';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ScrollableAnchor from 'react-scrollable-anchor'


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


const Box = styled(Container)`
    background: #FFFFFF;
    display: block;
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
        text-align: center;
        width: 80vw;
        height: auto;
        padding-bottom: 1.5rem;
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
    }

`

const Category = styled.p`
    font-size: 1.2rem;
    text-align: center;
    color: black;
    margin-top: 50px;
    font-weight: bold;
`

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
    }
`


const BecomeAmbassador = styled(CalltoActionButton)`
    margin: 2rem;
    transform: rotate(0deg);
    :hover {
        border: 1px solid grey;
        background: grey;
        a {
            color: white;
        }
        color: white;
    }

    @media(max-width: 770px) {
       margin: 1.5rem;
    }
`


export class Benefits extends Component {
    render() {
        return (
            <ScrollableAnchor id={'benefits'}>
                <div style={{ display: 'block', marginTop: '3rem', paddingTop: '1rem' }}>
                    
                        <Container><Line left/><Title> Benefits </Title><Line right/></Container>

                        <Container>

                            <Box className="funding-bg">
                                <img src={require('../images/funding.png')} alt="Status Logo" height="90px" />
                                <Category>Funding</Category>
                                <hr />
                                <Text>Receive funding to host meetups, workshops, and projects</Text> 
                            </Box>
                            
                            <Box className="support-bg">
                                <img src={require('../images/support.png')} alt="Status Logo" height="90px" />
                                <Category>Access & Support</Category>
                                <hr />
                                <Text>Help from core contributors on technical, organizational, and other projects</Text></Box>
                            
                            <Box className="rewards-bg">
                                <img src={require('../images/rewards.png')} alt="Status Logo" height="90px" />
                                <Category>Rewards</Category>
                                <hr />
                                <Text>Get some cool Status swag and earn SNT</Text>
                            </Box>

                            <Box className="future-bg">
                                <img src={require('../images/future.png')} alt="Status Logo" height="90px" />
                                <Category>Build the future</Category>  
                                <hr />                           
                                <Text>Active contribution in building the next generation of the internet</Text>
                            </Box>

                        </Container>

                        <Container>
                            <BecomeAmbassador><Container><a href="https://our.status.im/" target="_blank" rel="noopener noreferrer">
                                Become an ambassador </a> <KeyboardArrowRightIcon /></Container></BecomeAmbassador>
                        </Container>
                    
                </div>
            </ScrollableAnchor>
        );
    }
}

export default Benefits;