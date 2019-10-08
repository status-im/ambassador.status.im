import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from './boxes';


const Line = styled.div`
    width: 470px;
    border-bottom: 1px solid #A8A8A8;
`
const Title = styled.div`
    font-size: 1.8rem;
    color: #2C2C2C;
    margin: 0 2.5rem 0 2.5rem;
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

const Blank = styled(Container)`
    margin: 5rem;
`

class Contact extends Component {
    render() {
        return (
            <div style={{ display: 'block', marginTop: '3rem' }}>

                <Container>

                    <Line /><Title> Get in touch </Title><Line />
  
                    <Link> <a href="https://status.im" target="_blank" rel="noopener noreferrer"> Contact us in the Status Public Channel #Statusphere </a> </Link>

                </Container>

                <Blank/>

            </div>

        );
    }
}


export default Contact;