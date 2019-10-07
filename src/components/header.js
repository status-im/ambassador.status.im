import React, { Component } from 'react';
import styled from 'styled-components';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const Container = styled.div`
    display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    align-items: center;
`

const Tagline = styled.section`
    font-style: normal;
    font-weight: normal;
    font-size: 2.5rem;
    line-height: 47px;
    text-align: center;
    color: #2C2C2C;
    margin-top: 3rem;
`

const SecondTagline = styled.section`
    width: 580px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 140.8%;
    text-align: center;
    color: #2C2C2C;
    padding-top: 2rem;
    margin: auto;
`

const CalltoActionButton = styled.button`
    font-family: 'DM Sans', sans-serif;
    margin: 3rem;
    color: #000000;
    border-radius: 5px;
    display: inline-block;
    align-item: center;
    font-size: 1rem;
    padding: 1rem 1rem 1rem 1.2rem;
    a {
        color: white !important;
        font-size: 1rem;
    }
`


class Header extends Component {
    render() {
        return (
            <header style={{ display: 'block', textAlign: 'center'}}>

                    <Tagline>
                        We are Status
                    </Tagline>

                    <SecondTagline>
                        As the Status Ambassadors, we build, educate, promote, and contribute to the next generation of the Web
                    </SecondTagline>

                    <div className="ellipse-down">
                        <CalltoActionButton>

                            <Container>Become an Ambassador <KeyboardArrowRightIcon /></Container>
            
                        </CalltoActionButton>
                    </div>

            </header>

        );
    }
}


export default Header;