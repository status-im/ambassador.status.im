import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from './boxes';
import ScrollableAnchor from 'react-scrollable-anchor'


const Line = styled.div`
    width: 17%;
    border-bottom: 1px solid #A8A8A8;

    @media(max-width: 1100px) {
        width: 10%;
    }

    @media(max-width: 770px) {
        display: none;
    }
`

export const Title = styled.div`
    font-size: 1.5rem;
    color: #2C2C2C;
    margin: 0 2.5rem 0 2.5rem;
    text-align: center;

    @media(max-width: 1024px) {
        font-size: 1rem;
    }
`

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
        margin: 3rem 10rem 3rem 10rem;
        width: 80vw;
        height: auto;
        padding: 1rem;
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

                        <Line /><Title> We work across a range of areas and collaborate in many ways. </Title><Line />

                    </Container>

                    <Container>

                        <Link> <a href="https://boards.status.im/b/fchXE6x3kCqbs7RHL/status-ambassador-tasks" target="_blank" rel="noopener noreferrer"> Check out our shared project board </a> </Link>

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