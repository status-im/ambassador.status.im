import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from './boxes';
import {Link} from './tasks'


const Line = styled.div`
    width: 35%;
    border-bottom: 1px solid #A8A8A8;

    @media(max-width: 1100px) {
        width: 24%;
    }

    @media(max-width: 770px) {
        position: absolute;
        width: 30%;
        left: ${props => { if (props.left) { return "0" } }};
        right: ${props => { if (props.right) { return "0" } }};
    }
`


const Title = styled.div`
    width: 15%
    font-size: 1.8rem;
    color: #2C2C2C;
    margin: 0 2.5rem 0 2.5rem;
    text-align: center;

    @media(max-width: 1024px) {
        font-size: 1rem;
        width: 30%;
    }
`


const Link2 = styled(Link)`
    margin-top: 5rem;

    @media(max-width: 1100px) {
        margin-top: 4rem;
    }

    @media(max-width: 770px) {
        margin: 3rem auto;
        line-height: 180%;
        width: 80%;
    }   
`

//A blank put at the bottom
const Blank = styled(Container)`
    margin: 5rem;

    @media(max-width: 770px) {
       margin: 1.5rem;
    }
`

class Contact extends Component {
    render() {
        return (
            <div style={{ display: 'block', marginTop: '8rem' }}>

                <Container>

                    <Line left/><Title> Get in touch </Title><Line right/>


                </Container>
                
                <Link2> <a href="status-im://chat/public/statusphere" target="_blank" rel="noopener noreferrer"> Contact us in the Status Public Channel #Statusphere </a> </Link2>
                
                <Blank/>

            </div>

        );
    }
}


export default Contact;