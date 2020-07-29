import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
    background: black;
    width: 70%;
    height: auto;
    box-sizing: border-box;
    margin: 60px auto 60px auto;
    font-size: 1.5rem;

    @media(max-width: 600px) {
        width: 90%;
        margin: 50px auto 70px auto;
    }

    hr {
        width: 80px;
        border: 1px solid #A8A8A8;
        margin-top: 40px;
    }
`

const ContentFirst = (
    <Box>
        <table className="tg">
            <thead>
                <tr>
                    <th className="tg-header header-font" colspan="2">Content</th>
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
                            <span className="description-header">Blog post or article</span>
                            <br/>
                            <span className="description-content">- Our Status</span>
                            <br/>
                            <span className="description-content">- Third-party blog platforms (Medium, Steemit, etc.)</span>
                            <br/>
                            <span className="description-content">- Min. 5 mins read</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            2,500 SNT
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Infographic</span>
                            <br/>
                            <span className="description-content">- More than 6 data fields (e.g., the number of ENS registrations from https://analytics.status.im/)</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            2,000 SNT
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Design assets</span>
                            <br/>
                            <span className="description-content">- Graphics about Status</span>
                            <br/>
                            <span className="description-content">- ↑ 3 images</span>
                            <br/>
                            <span className="description-content">- Brand guidelines</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            2,000 SNT
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </Box>
);

export default ContentFirst;
