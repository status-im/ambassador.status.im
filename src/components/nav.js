import React, { Component } from 'react';
import styled from 'styled-components'

const Navbar = styled.section`
    margin-top: 1.2rem;
    font-family: 'DM Sans', sans-serif;
    display: flex;
    justify-content: center;
    
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
        text-indent: 4rem;
    }

    ul li a {
        color: black;
        text-decoration: none;
    }

    ul li a:hover {
        color: grey;
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

    :hover {
        corlor: white;
        background: grey;        
    }
`

class Nav extends Component {
    render() {
        return (
            <nav>
                <Navbar>

                    <ul style={{ marginRight: '8rem' }}>
                        <a href="https://status.im/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../images/logo.png')} alt="Status Logo" />
                        </a>

                    </ul>

                    <ul style={{ marginLeft: '10rem' }}>

                        <li>
                            <a href="https://status.im/" target="_blank" rel="noopener noreferrer">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/status-im" target="_blank" rel="noopener noreferrer">
                                Benefits
                            </a>
                        </li>

                        <li>
                            <a href="https://our.status.im/" target="_blank" rel="noopener noreferrer">
                                Working Groups
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
