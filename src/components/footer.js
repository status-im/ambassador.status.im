import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from './boxes';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const FooterComponent = styled.div`
  background: rgb(0, 0, 0);
  color: #fff;
  padding: 20px;
  align-items: center;

  a, a:hover, a:visited {
    color: white;
  }

  ul li{
    display: inline;
    margin: 0 10px 0 10px;
  }
`

const GetStarted = styled.p`
    font-weight: 500;
    font-size: 30px;
    display: inline-block;

    @media(max-width: 770px) {
        font-size: 20px;
        text-align: center;
    }
    @media(max-width: 425px) {
        margin-left: 30px;
        margin-right: 30px;
    }
    @media(max-width: 340px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`

const CtaButton = styled.button`
    display: inline-block;
    font-family: 'DM Sans', sans-serif;
    position: relative
    z-index: 1;
    background-color: white;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    padding: 7px 10px 7px 15px;
    cursor: pointer;
    border: 1px solid #000000;
    box-sizing: border-box;
    color: #000000;
    font-size: 1rem;
    
    :hover {
        border: 1px solid grey;
        background: grey;
        a {
            color: white;
        }
        color: white;
    }
`

const FirstRow = styled.div`
    @media(max-width: 770px) {
        margin: 0;
    }  
`

const SecondRow = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;

    h3 {
        font-weight: 500;
    }

    a:hover {
        text-decoration: underline;
    }

    @media(max-width: 890px) {
        display: inline-block;
        margin-left: 20px;
        ul {
            li {
                margin : 10px;
            }
        }
    }
`

const DivContainer = styled.div`
    display: inline-block;
    margin-right: 200px;

    @media(max-width: 1100px) {
        margin-right: 60px;
    }

    @media(max-width: 499px) {
        margin-right: 0px;
        ul {
            li {
                margin : 10px;
            }
        }
    }
`

class Footer extends Component {
  render() {
    return (
     
    <FooterComponent>
        
        <div>
            <FirstRow>
                <div>
                    <Container>
                            <DivContainer><GetStarted>Ready to get started with the Status Network?</GetStarted></DivContainer>
                            <a href="https://status.im/get/" target="_blank" rel="noopener noreferrer"><CtaButton>Get Status <KeyboardArrowRightIcon style={{ marginLeft: '30px' }}/></CtaButton></a>
                    </Container>
                </div>
            </FirstRow>
            <SecondRow>
                    <DivContainer>
                        <h3>Connect</h3>
                        <ul>
                            <li>
                                <a href="https://join.status.im/statusphere" target="_blank" rel="noopener noreferrer">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5">
                                            <rect width="26" height="26" rx="2" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.564 12.5345C14.4448 12.6282 15.3256 12.7219 16.4085 12.6602C19.3425 12.4931 21.1198 10.9547 20.9937 8.6551C20.8652 6.31539 18.5007 4.87391 16.1349 5.0087C12.2794 5.22815 9.44428 8.68621 9.12497 12.6386C9.64857 12.5133 10.1997 12.4385 10.7194 12.4089C11.8024 12.3473 12.6832 12.4409 13.564 12.5345ZM6.00598 17.6495C6.12764 19.7943 8.3677 21.1156 10.6091 20.992C14.2616 20.7908 16.9476 17.6209 17.25 13.9979C16.754 14.1128 16.2319 14.1815 15.7395 14.2085C14.7136 14.265 13.879 14.1792 13.0445 14.0933C12.2101 14.0075 11.3756 13.9217 10.3497 13.9782C7.57021 14.1313 5.88632 15.5415 6.00598 17.6495Z" fill="black" />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/ethstatus" target="_blank" rel="noopener noreferrer">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5">
                                            <rect width="26" height="26" rx="2" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.203 14.0701H16.552L16.905 11.4371H14.203V9.74713C14.203 8.98313 14.416 8.46213 15.552 8.46213H17V6.10013C16.2988 6.031 15.5946 5.99763 14.89 6.00013C12.8 6.00013 11.37 7.22513 11.37 9.48613V11.4361H9V14.0701H11.371V20.8571H14.203V14.0701Z" fill="black" />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/ethstatus" target="_blank" rel="noopener noreferrer">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5">
                                            <rect width="26" height="26" rx="2" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.232 9.056C19.8854 8.63145 20.3656 7.9874 20.586 7.24C19.987 7.62 19.325 7.89 18.631 8.036C18.0671 7.38246 17.2482 7.00471 16.385 7C14.685 7 13.307 8.469 13.307 10.282C13.307 10.533 13.334 10.784 13.388 11.029C10.83 10.893 8.562 9.587 7.044 7.601C6.76882 8.10728 6.62574 8.67477 6.628 9.251C6.628 10.389 7.17 11.394 7.996 11.982C7.50422 11.9649 7.02473 11.8239 6.602 11.572V11.613C6.602 13.203 7.664 14.53 9.072 14.831C8.62003 14.9617 8.14316 14.9813 7.682 14.888C8.073 16.192 9.21 17.14 10.557 17.167C9.2938 18.2353 7.64202 18.7279 6 18.526C7.38681 19.4836 9.03169 19.9976 10.717 20C16.377 20 19.473 15 19.473 10.662C19.473 10.52 19.47 10.378 19.464 10.238C20.0725 9.76702 20.5926 9.19176 21 8.539C20.4416 8.80337 19.8449 8.97785 19.232 9.056Z" fill="black" />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://discuss.status.im/" target="_blank" rel="noopener noreferrer">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5">
                                            <rect width="26" height="26" rx="2" fill="white" />
                                            <path d="M13.0679 5.14282C8.68929 5.14282 5 8.66068 5 13.0035C5 13.1428 5.00357 21.1428 5.00357 21.1428L13.0679 21.1357C17.45 21.1357 21 17.4821 21 13.1393C21 8.79639 17.45 5.14282 13.0679 5.14282ZM13 17.7143C12.3071 17.7143 11.6464 17.5607 11.0571 17.2821L8.16071 18L8.97857 15.3214C8.62857 14.675 8.42857 13.9321 8.42857 13.1428C8.42857 10.6178 10.475 8.57139 13 8.57139C15.525 8.57139 17.5714 10.6178 17.5714 13.1428C17.5714 15.6678 15.525 17.7143 13 17.7143Z" fill="#090909" />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/status-im" target="_blank" rel="noopener noreferrer">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5">
                                            <rect width="26" height="26" rx="2" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 13.334C4.99977 16.9216 7.29547 20.1067 10.699 21.241C11.116 21.317 11.268 21.06 11.268 20.839C11.268 20.641 11.261 20.117 11.257 19.422C8.939 19.925 8.45 18.305 8.45 18.305C8.07 17.342 7.524 17.085 7.524 17.085C6.767 16.569 7.581 16.579 7.581 16.579C8.418 16.638 8.858 17.438 8.858 17.438C9.601 18.711 10.808 18.343 11.283 18.13C11.359 17.592 11.574 17.225 11.813 17.016C9.962 16.806 8.016 16.091 8.016 12.898C8.016 11.988 8.341 11.244 8.874 10.662C8.788 10.451 8.502 9.60299 8.956 8.45599C8.956 8.45599 9.656 8.23199 11.247 9.31099C11.9272 9.12556 12.629 9.03107 13.334 9.02999C14.0386 9.03093 14.7401 9.12508 15.42 9.30999C17.01 8.23199 17.71 8.45599 17.71 8.45599C18.164 9.60299 17.878 10.451 17.792 10.662C18.327 11.244 18.649 11.988 18.649 12.898C18.649 16.099 16.7 16.804 14.844 17.01C15.143 17.267 15.41 17.776 15.41 18.553C15.41 19.667 15.4 20.566 15.4 20.839C15.4 21.062 15.55 21.321 15.972 21.24C20.0101 19.8925 22.3836 15.7182 21.4767 11.559C20.5697 7.39967 16.6739 4.59249 12.4413 5.04846C8.20881 5.50443 5.00027 9.07696 5 13.334H5Z" fill="black" />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/statusim" target="_blank" rel="noopener noreferrer">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5">
                                            <rect width="26" height="26" rx="2" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.142 15.665L11.141 10.608L16.005 13.145L11.142 15.665ZM21.82 9.731C21.82 9.731 21.644 8.491 21.105 7.945C20.42 7.228 19.653 7.225 19.301 7.182C16.782 7 13.004 7 13.004 7H12.996C12.996 7 9.218 7 6.699 7.182C6.347 7.224 5.58 7.228 4.895 7.945C4.355 8.491 4.18 9.731 4.18 9.731C4.18 9.731 4 11.189 4 12.645V14.009C4 15.466 4.18 16.922 4.18 16.922C4.18 16.922 4.356 18.162 4.895 18.709C5.58 19.426 6.479 19.403 6.88 19.479C8.32 19.617 13 19.659 13 19.659C13 19.659 16.782 19.654 19.301 19.472C19.653 19.43 20.421 19.426 21.105 18.709C21.645 18.163 21.82 16.922 21.82 16.922C21.82 16.922 22 15.466 22 14.009V12.644C22 11.187 21.82 9.73 21.82 9.73V9.731Z" fill="black" />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </DivContainer>
                    <div style={{ display: 'inline-block' }}>
                        <a href="https://status.im/privacy-policy/" target="_blank" rel="noopener noreferrer"> <h3>Privacy Policy</h3> </a>
                        <ul ><li style={{ color: 'rgba(255, 255, 255, 0.6)', margin: '0' }}>Status Research & Development GmbH, Baarerstrasse 10, Zug, Switzerland</li></ul>
                    </div>
            </SecondRow>
        </div>
    </FooterComponent>
    )
  }
}

export default Footer;
