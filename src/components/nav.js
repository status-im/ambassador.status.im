import React, { Component } from 'react';
import styled from 'styled-components'

const Navbar = styled.section`
    margin-top: 1.2rem;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr;
    font-family: 'DM Sans', sans-serif;
    
    img {
        width: 8rem;
    }

    ul {
        display: flex;
        list-style: none;
        align-items: center;
    }

    ul li {
        float: left;
        text-indent: 3.5rem;
    }

    ul li a {
        color: black;
        text-decoration: none;
    }
`

const NavButton = styled.button`
    background: #000000;
    border-radius: 5px;
    padding: 0.7rem 1.2rem 0.7rem 1.2rem;
    a {
        color: white !important;
        font-size: 1rem;
    }
`

class Nav extends Component {
    render() {
        return (
            <nav>
                <Navbar>

                    <ul>
                        <a href="https://status.im/" target="_blank" rel="noopener noreferrer">
                            <li><img src={require('../images/logo.png')} alt="Status Logo" /></li>
                        </a>
                    </ul>

                    <ul>

                        <li>
                            <a href="https://status.im/" target="_blank" rel="noopener noreferrer">
                                Who we are
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/status-im" target="_blank" rel="noopener noreferrer">
                                What we do
                            </a>
                        </li>

                        <li>
                            <a href="https://our.status.im/" target="_blank" rel="noopener noreferrer">
                                Upcoming events
                            </a>
                        </li>

                        <li>
                            <NavButton>
                                <a href="https://our.status.im/" target="_blank" rel="noopener noreferrer">
                                    Become an ambassador
                                </a>
                            </NavButton>
                        </li>

                    </ul>
                </Navbar>
            </nav>
        );
    }
}

export default Nav;
