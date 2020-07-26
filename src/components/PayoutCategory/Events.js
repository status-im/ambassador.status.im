import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
    background: black;
    width: 80%;
    height: auto;
    box-sizing: border-box;
    margin: 80px auto 50px auto;
    font-size: 1.5rem;

    @media(max-width: 600px) {
        width: 90%;
    }

    hr {
        width: 80px;
        border: 1px solid #A8A8A8;
        margin-top: 40px;
    }
`

const Events = (
    <Box>
        <table className="tg">
            <thead>
                <tr>
                    <th className="tg-header header-font" colspan="2">Events</th>
                </tr>                
                <tr>
                    <th className="tg-center header-font">Tasks</th>
                    <th className="tg-center header-font">Base reward</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Online webinar or workshop</span>
                            <br/>
                            <span className="description-content">- Presenting Status in your language</span>
                            <br/>
                            <span className="description-content">- min. 10 mins</span>
                            <br/>
                            <span className="description-content">- Recommend using localized slides &amp; materials</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            3,500 SNT
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Hackathon & conference representation</span>
                            <br/>
                            <span className="description-content">- 1 speaking session</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            3,200 SNT
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Meetup</span>
                            <br/>
                            <span className="description-content">- http://bit.ly/ambassador-meetup-budget</span>
                            <br/>
                            <span className="description-content">- Based on a meetup of the ‘S’ size</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            3,200 SNT
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </Box>
);

export default Events;
