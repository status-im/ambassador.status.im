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
        @media(max-width: 1250px) {
            text-indent: 3.5rem;
        }
    }

    ul li a {
        color: black;
        text-decoration: none;
        @media(max-width: 1250px) {
            font-size: 0.8rem;
        }
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

const Logo = styled.ul`
    margin-right: 8rem;
    @media(max-width: 1250px) {
        margin-right: 2rem;
  }
`

const NavItem = styled.ul`
    margin-left: 10rem;
    @media(max-width: 1250px) {
        margin-left: 2rem;
    }
`

class Nav extends Component {
    render() {
        return (
            <nav>
                <Navbar>

                    <Logo>
                        <a href="https://status.im/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../images/logo.png')} alt="Status Logo" />
                        </a>

                    </Logo>

                    <NavItem>

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

                    </NavItem>

                </Navbar>
            </nav>
        );
    }
}

export default Nav;
