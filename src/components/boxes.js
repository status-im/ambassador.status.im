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

const Box = styled.div`
    width: 30%;
    height: 320px;
    margin: 0 1% 2% 1%;
    background: #000000;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    float: left;
`

const Firstline = styled.div`
    font-weight: 500;
    text-align:left;
    font-size: 1.5rem;
    line-height: 23px;
    margin-top: 2rem;
    color: #FFFFFF;
    margin-left: 2rem;
`

const Secondline = styled(Firstline)`
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-right: 2rem;
    height: 160px;
`
const CalltoActionButton = styled.button`
    background: #FFFFFF;
    margin-left: 2rem;
    border-radius: 5px;
    display: inline-block;
    padding: 0.5rem 1.2rem 0.5rem 1.2rem;
    a {
        color: black;
        font-size: 1rem;
        text-decoration: none;
    }
`

class Boxes extends Component {
    render() {
        return (
            <div style={{ display: 'block', marginTop: '3rem'}}>
                
                <Container>

                    <Box>

                        <Firstline>
                            What We Do
                        </Firstline>

                        <Secondline>
                            We are free to choose our own contributions. Some of us write code, others write blog posts. Some host events and some host webinars. Together we help create and spread the word about Status.
                        </Secondline>

                        <CalltoActionButton>
                            <a href="www.status.im">Working Groups</a>
                        </CalltoActionButton>

                    </Box>

                    <Box>

                        <Firstline>
                            Why we do it
                        </Firstline>

                        <Secondline>
                            We believe in a private, secure, open, and fair internet for all. Status is building the tools and infrastructure for the next generation of the web, and together, we help make this vision a reality.
                        </Secondline>

                        <CalltoActionButton>
                            <a href="www.status.im">Status Principles</a>
                        </CalltoActionButton>

                    </Box>

                    <Box>

                        <Firstline>
                            What it takes
                        </Firstline>

                        <Secondline>
                            Anyone who believes in this vision can become an ambassador. In a permission less environment, anyone is welcome to contribute how they choose. Sign up and let us know how you would like to get involved.
                        </Secondline>

                        <CalltoActionButton>
                            <a href="www.status.im">Become an ambassador</a>
                        </CalltoActionButton>

                    </Box>

                </Container>

            </div>

        );
    }
}


export default Boxes;