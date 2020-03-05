import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor'

//Align components vertically and horizontally
export const Container = styled.div`
    display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
`

//Containers of the black boxes
const Box = styled.div`
    width: 380px;
    height: 320px;
    margin: 0 1% 2% 1%;
    background: #000000;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    float: left;

    @media(max-width: 1250px) {
        width: 320px;
        height: 320px;
    }

    @media(max-width: 1024px) {
        text-align: center;
        margin: 0 10rem 3rem 10rem;
        width: 80vw;
        height: auto;
        padding-bottom: 1.5rem;
        margin: 3vw;
    }
`

//The first line in the box
const Firstline = styled.p`
    font-weight: 500;
    text-align:left;
    font-size: 1.5rem;
    line-height: 23px;
    margin-top: 2rem;
    color: #FFFFFF;
    margin-left: 2rem;

    @media(max-width: 1024px) {
        margin-left: 0rem;
        font-size: 1.3rem;
        text-align: center;
    }
`

//The second line in the boxs
const Secondline = styled(Firstline)`
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    height: 130px;

    @media(max-width: 1250px) {
        height: 145px;
    }

    @media(max-width: 1024px) {
        margin-left: 2rem;
        margin-top: 1rem;
        font-size: 0.8rem;
        height: auto;
    }
`

//CTAs in the boxes
const CalltoActionButton = styled.button`
    background: #FFFFFF;
    margin-left: 2rem;
    margin-top: 1rem;
    border-radius: 5px;
    position: relative;
    display: inline-block;
    padding: 0.5rem 1.2rem 0.5rem 1.2rem;
    color: black;
    font-size: 1rem;
    text-decoration: none;
    :hover {
        background: grey;
        a {
            color: white;
        }
        border: grey;
        cursor: pointer;
    }

    @media(max-width: 1024px) {
        margin-top: 0rem;
        margin-left: 0rem;
    }
`

export const Link = styled.div`
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
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

    @media(max-width: 340px) {
        font-size: 0.9rem;
    }    
`

var locale = navigator.userLanguage || (navigator.languages.slice(0, 2) && navigator.languages[0].slice(0, 2)) || "en";

function becomeAmbassador({ locale }) {
    if (locale === 'zh') {
        return (
            <a href="mailto:ambassador@status.im?subject=Status Ambassador Application&body=Please find the application form at https://github.com/status-im/ambassador.status.im/blob/master/application-form.md" target="_blank" rel="noopener noreferrer"> <CalltoActionButton> Become an ambassador </CalltoActionButton></a> 
        )
    }
    else {
        return (
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhMBGfCRQ-CuFhB3sFFm9MBtsQd6kJybkGI2M-JqpXOrY2pA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"> <CalltoActionButton> Become an ambassador </CalltoActionButton></a> 
        )
    }
}

export class Boxes extends Component {
    render() {
        return (
            <ScrollableAnchor id={'about'}>
                <div style={{ display: 'block', paddingTop: '1rem'}}>
                    <Container>
                        <Box>
                            <Firstline> What We Do </Firstline>
                            <Secondline> We are free to choose our own contributions. Some of us write code, others write blog posts. Some host events and some host webinars. Together we help create and spread the word about Status. </Secondline>
                            <a href="https://boards.status.im/b/fchXE6x3kCqbs7RHL/status-ambassador-tasks" target="_blank" rel="noopener noreferrer"> <CalltoActionButton> Working Groups </CalltoActionButton></a>
                        </Box>
                        <Box>

                            <Firstline> Why we do it </Firstline>
                            <Secondline> We believe in a private, secure, open, and fair internet for all. Status is building the tools and infrastructure for the next generation of the web, and together, we help make this vision a reality. </Secondline>
                            <a href="https://status.im/about/" target="_blank" rel="noopener noreferrer"> <CalltoActionButton> Status Principles </CalltoActionButton> </a> 
                        </Box>
                        <Box>
                            <Firstline> What it takes </Firstline>
                            <Secondline> Anyone who believes in this vision can become an ambassador. In a permission less environment, anyone is welcome to contribute how they choose. Sign up and let us know how you would like to get involved. </Secondline>
                            { becomeAmbassador({ locale }) }
                        </Box>
                    </Container>
                    <Container>
                        <Link> <a href="https://docs.google.com/presentation/d/e/2PACX-1vTq-r4ZSEX7y9gr7Mlw95IDXEfVGbd2rxp0jk2NvmX6Q2EWwqaLUcWcWuUAZdiz1GDvouv5bpuIVSCW/pub?start=false&loop=false&delayms=3000" target="_blank" rel="noopener noreferrer"> Learn more about the Status Ambassadors</a> </Link>
                    </Container>
                </div>
            </ScrollableAnchor>
        );
    }
}