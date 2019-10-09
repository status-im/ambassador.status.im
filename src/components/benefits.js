import React, { Component } from 'react';
import styled from 'styled-components';
import { Line, Title } from './tasks';
import { Container } from './boxes';


const Line2 = styled(Line)`
    width: 38%;
`


const Title2 = styled(Title)`
    font-size: 1.8rem;
`


export class Benefits extends Component {
    render() {
        return (
            <div style={{ display: 'block', marginTop: '3rem' }}>

                <Container>

                    <Line2 /><Title2> Benefits </Title2><Line2 />

                </Container>

            </div>

        );
    }
}

export default Benefits;