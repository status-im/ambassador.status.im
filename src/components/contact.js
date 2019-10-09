import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from './boxes';
import {Line, Title, Link} from './tasks'


const Line3 = styled(Line)`
    width: 35%;
`
const Title3 = styled(Title)`
    font-size: 1.8rem;
`

const Blank = styled(Container)`
    margin: 5rem;
`

class Contact extends Component {
    render() {
        return (
            <div style={{ display: 'block', marginTop: '8rem' }}>

                <Container>

                    <Line3 /><Title3> Get in touch </Title3><Line3 />
  
                    <Link> <a href="https://status.im" target="_blank" rel="noopener noreferrer"> Contact us in the Status Public Channel #Statusphere </a> </Link>

                </Container>

                <Blank/>

            </div>

        );
    }
}


export default Contact;