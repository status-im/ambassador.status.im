import React, { Component } from 'react';
import styled from 'styled-components';
import { Title } from './tasks';
import { Container } from './boxes';
import { CalltoActionButton } from './header';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ScrollableAnchor from 'react-scrollable-anchor'


const Line2 = styled.div`
    width: 38%;
    border-bottom: 1px solid #A8A8A8;

    @media(max-width: 770px) {
        width: 15%;
    }
`

const Title2 = styled(Title)`
    font-size: 1.8rem;
`


const Box = styled(Container)`
    display: block;
    width: 250px;
    margin: 5% 1.5% 2% 1.5%;
    height: 400px;
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
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

`

const Category = styled.p`
    font-size: 1.2rem;
    text-align: center;
    color: white;
    margin-top: 100px;
    font-weight: bold;
`

const Text = styled.section`
    font-weight: normal;
    font-size: 1rem;
    line-height: 180%;
    text-align: left;
    color: white;
    margin: 150px 20px 20px 20px;

    @media(max-width: 1160px) {
        font-size: 0.8rem;
    }

    @media(max-width: 1024px) {
        margin: 100px 20px 20px 20px;
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
                    
                        <Container><Line2 /><Title2> Benefits </Title2><Line2 /></Container>

                        <Container>

                            <Box className="funding-bg">
                                <Category>Funding</Category>
                                <Text>Receive funding to host meetups, workshops, and projects</Text> 
                            </Box>
                            
                            <Box className="support-bg">
                                <Category>Access & Support</Category>
                                <Text>Help from core contributors on technical, organizational, and other projects</Text></Box>
                            
                            <Box className="rewards-bg">
                                <Category>Rewards</Category>
                                <Text>Get some cool Status swag and earn SNT</Text>
                            </Box>

                            <Box className="future-bg">
                                <Category>Build the future</Category>                             
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