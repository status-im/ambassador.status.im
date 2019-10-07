import React, { Component } from 'react';
import styled from 'styled-components'


const Container = styled.div`
    display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    align-items: center;
`

const Text = styled.section`
    width: 580px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 140.8%;
    text-align: center;
    color: #2C2C2C;
    padding-top: 10rem;
    margin: auto;
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

class People extends Component {
    render() {
        return (
            <div style={{ display: 'block', marginTop: '3rem' }}>
                
                <div className="ellipse-up">

                    <Container>

                        <Text>We are spread across the world <br /> with different backgrounds and areas of expertise</Text>

                    </Container>

                    <Container>

                        <Link> <a href="https://status.im" target="_blank" rel="noopener noreferrer"> Join Us </a> </Link>

                    </Container>


                </div>

            </div>

        );
    }
}


export default People;