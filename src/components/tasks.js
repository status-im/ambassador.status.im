import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from './boxes';
import ScrollableAnchor from 'react-scrollable-anchor'


const Line = styled.div`
    width: 30%;
    border-bottom: 1px solid #A8A8A8;

    @media(max-width: 1100px) {
        width: 29%;
    }

    @media(max-width: 770px) {
        position: absolute;
        width: 28%;
        left: ${props => { if (props.left) { return "0" } }};
        right: ${props => { if (props.right) { return "0" } }};
    }
`

const Title = styled.div`
    width: 25%
    font-size: 1.5rem;
    color: #2C2C2C;
    margin: 0 2.5rem 0 2.5rem;
    text-align: center;

    @media(max-width: 1024px) {
        line-height: 23px;
        font-size: 1rem;
        width: 55%
        margin: 0 1rem 0 1rem;
    }
`

// Text in the section
const Text = styled.section`
    width: 80vw;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140%;
    color: #2C2C2C;
    padding-top: 4rem;
    margin: auto;

    @media(max-width: 770px) {
        width: 75vw;
        font-size: 1.3rem;
    }
`

//Task boxes for desktop and mobile
const Box = styled(Container)`
    display: flex;
    width: 280px;
    height: 280px;
    margin: 5% 1% 2% 1%;
    padding: 2rem;
    text-align: center;
    box-sizing: border-box;
    border-radius: 8px;
    float: left;
    color: white;
    font-size: 1.5rem;

    @media(max-width: 1220px) {
        width: 230px;
        height: 230px;
    }

    @media(max-width: 1024px) {
        text-align: center;
        margin: 3rem 0.5rem 3rem 0.5rem;
        width: 85vw;
        height: auto;
        padding: 3rem;
        margin: 1rem;
        font-size: 1rem;
    }

`

export const Link = styled.div`
    text-align: center;
    margin-top: 3rem;
    font-size: 1.2rem;
    text-decoration: none !important;

    a, a:visited {
        color: #4F6CDE;
        text-decoration: none !important;
    }

    a:hover {
        color: blue;
    }

    @media(max-width: 1220px) {
        font-size: 1rem;
        margin-bottom: 3rem;
    }    
`

export class Tasks extends Component {
    render() {
        return (
            <ScrollableAnchor id={'tasks'}>
                <div style={{ display: 'block', marginTop: '3rem', paddingTop: '1rem' }}>
                    <Container>
                        <Line left /><Title>Submitting Tasks</Title><Line right/>
                    </Container>
                    <Container><Text>When submitting your claim for reward, you'll be asked to share links demonstrating your involvement in each task (e.g., screenshots or video clips). 
                        You can start working on your task after adding a card to the Wekan task board and get it reviewed with the Status team. 
                        You can also suggest a task which is not listed on the task sheet below.</Text></Container>
                    <Container>
                        <Link> <a href="https://boards.status.im/b/fchXE6x3kCqbs7RHL/status-ambassador-tasks" target="_blank" rel="noopener noreferrer">Submit now</a> </Link>
                    </Container>
                    <Container>
                        <Box className="event-bg"> Events & Meetups </Box>
                        <Box className="content-bg"> Content & Creative </Box>
                        <Box className="community-bg"> Community Development </Box>
                        <Box className="technical-bg"> Technical Contribution </Box>
                    </Container>
                </div>
            </ScrollableAnchor>
        );
    }
}