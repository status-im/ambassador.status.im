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
    @media(max-width: 900px) {
        display: none;
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

    @media(max-width: 900px) {
        a { 
            color: black !important;
        }
        background-color: white;
        border: 1px solid #000000;
    }
    
`

const Logo = styled.ul`
    margin-right: 8rem;
    @media(max-width: 1250px) {
        margin-right: 2rem;
    }
    @media(max-width: 900px) {
        display: none;
    }
`

const NavItem = styled.ul`
    margin-left: 10rem;
    @media(max-width: 1250px) {
        margin-left: 2rem;
    }
`

const MobileNav = styled.div`

    li {
        margin: 2rem 2rem 2rem 0;
        
    }
    
    a, a:hover, a:visited {
        text-decoration: none;
        color: black;
    }

    ul {
        margin-top: 3rem;
    }

    hr {

    }
`

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <nav>
                <Navbar>

                    <Logo><a href="https://status.im/" target="_blank" rel="noopener noreferrer"><img src={require('../images/logo.png')} alt="Status Logo" /></a></Logo>

                    <NavItem>

                        <li><a href="https://status.im/" target="_blank" rel="noopener noreferrer"> About </a></li>

                        <li><a href="https://github.com/status-im" target="_blank" rel="noopener noreferrer"> Benefits </a></li>

                        <li><a href="https://our.status.im/" target="_blank" rel="noopener noreferrer"> Working Groups </a></li>

                        <li><NavButton><a href="https://our.status.im/" target="_blank" rel="noopener noreferrer"> Become an ambassador </a></NavButton></li>

                    </NavItem>

                </Navbar>

                <div className="mobile-nav">

                    <a className="mobile-logo" href="https://status.im/" target="_blank" rel="noopener noreferrer"><img src={require('../images/logo.png')} alt="Status Logo" width="100px" /></a>
                    <a href="#" className="mobile-menu" onClick={this.handleClick}>
                        {this.state.isToggleOn ? <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="22" height="1" rx="0.5" fill="#090909" /> <rect y="7" width="22" height="1" rx="0.5" fill="#090909" /> </svg> 
                            : <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="1.5752" y="0.368273" width="22" height="1" rx="0.5" transform="rotate(45 1.5752 0.368273)" fill="#090909" /> <rect x="0.868164" y="15.9246" width="22" height="1" rx="0.5" transform="rotate(-45 0.868164 15.9246)" fill="#090909" /> </svg>
                        }
                    </a>

                    <div>
                        {this.state.isToggleOn ? ""
                            : 
                        <div className="mobile-nav-menu">
                            
                            <a className="mobile-logo" href="https://status.im/" target="_blank" rel="noopener noreferrer"><img src={require('../images/logo.png')} alt="Status Logo" width="100px" /></a>
                            <a href="#" className="mobile-menu" onClick={this.handleClick}>
                                {this.state.isToggleOn ? <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="22" height="1" rx="0.5" fill="#090909" /> <rect y="7" width="22" height="1" rx="0.5" fill="#090909" /> </svg> 
                                    : <svg className="padding-top-10" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="1.5752" y="0.368273" width="22" height="1" rx="0.5" transform="rotate(45 1.5752 0.368273)" fill="#090909" /> <rect x="0.868164" y="15.9246" width="22" height="1" rx="0.5" transform="rotate(-45 0.868164 15.9246)" fill="#090909" /> </svg>
                                }
                            </a>
                            <div>

                                <MobileNav>
                                        <ul>
                                            <li><a href="https://status.im/" target="_blank" rel="noopener noreferrer"> About </a></li>
                                            
                                            <li><a href="https://github.com/status-im" target="_blank" rel="noopener noreferrer"> Benefits </a></li>

                                            <li><a href="https://our.status.im/" target="_blank" rel="noopener noreferrer"> Working Groups </a></li>

                                            <li><NavButton><a href="https://our.status.im/" target="_blank" rel="noopener noreferrer"> Become an ambassador </a></NavButton></li>
                                        </ul>
                                </MobileNav>

                            </div>

                        </div>
                        }
                    </div>

                </div>

            </nav>
        );
    }
}

export default Nav;