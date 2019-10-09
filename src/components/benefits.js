import React, { Component } from 'react';
import styled from 'styled-components';
import { Line, Title, Box } from './tasks';
import { Container } from './boxes';
import { CalltoActionButton } from './header';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Line2 = styled(Line)`
    width: 38%;
`


const Title2 = styled(Title)`
    font-size: 1.8rem;
`


const Box2 = styled(Box)`
    background: #FFFFFF;
    width: 250px;
    margin: 5% 1.5% 2% 1.5%;
    height: 400px;
    border: 1px solid #A8A8A8;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
`

const Text = styled.section`
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 180%;
    text-align: left;
    color: #000000;
    padding: 15rem 1.2rem 2rem 1.3rem;
    margin: auto;
`

const BecomeAmbassador = styled(CalltoActionButton)`
    margin: 2rem;
    transform: rotate(0deg);
    :hover {
        border: 1px solid black;
    }
`

export class Benefits extends Component {
    render() {
        return (
            <div style={{ display: 'block', marginTop: '3rem' }}>

                <Container><Line2 /><Title2> Benefits </Title2><Line2 /></Container>

                <Container>

                    <Box2><Text>Receive funding to host meetups, workshops, and projects</Text></Box2>
                    <Box2><Text>Help from core contributors on technical, organizational, and other projects</Text></Box2>
                    <Box2><Text>Get some cool Status swag and earn SNT</Text></Box2>
                    <Box2><Text>Active contribution in building the next generation of the internet</Text></Box2>


                    <BecomeAmbassador><Container><a href="https://our.status.im/" target="_blank" rel="noopener noreferrer">
                        Become an ambassador </a> <KeyboardArrowRightIcon /></Container></BecomeAmbassador>
                
                </Container>


            </div>

        );
    }
}

export default Benefits;