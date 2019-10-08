import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from './boxes';


const Line = styled.div`
    width: 350px;
    border-bottom: 1px solid #A8A8A8;
`

const Title = styled.div`
    font-size: 1.5rem;
    color: #2C2C2C;
    margin: 0 2.5rem 0 2.5rem;
    text-align: center;
`

const Box = styled(Container)`
    width: 280px;
    height: 280px;
    margin: 5% 1% 2% 1%;
    background: #000000;
    box-sizing: border-box;
    border-radius: 8px;
    float: left;
    color: white;
    font-size: 1.5rem;
`

const Link = styled.div`
    text-align: center;
    margin-top: 3rem;
    font-size: 1.2rem;
    text-decoration: none !important;

    a, a:visited {
        color: #4F6CDE;
        text-decoration: none !important;
    }
`

class Tasks extends Component {
    render() {
        return (
            <div style={{ display: 'block', marginTop: '3rem' }}>

                <Container>

                    <Line />
                    <Title> We work across a range of areas and <br/> collaborate in many ways. </Title>
                    <Line />

                </Container>

                <Container>

                    <Link> <a href="https://status.im" target="_blank" rel="noopener noreferrer"> Check out our shared project board </a> </Link>

                </Container>

                <Container>

                    <Box> Events & Meetups </Box>
                    <Box> Content & Creative </Box>
                    <Box> Community <br /> Development </Box>
                    <Box> Technical <br /> Contribution </Box>

                </Container>

            </div>

        );
    }
}

export default Tasks;