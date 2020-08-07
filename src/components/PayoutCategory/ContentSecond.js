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

const ContentSecond = (
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
                            <span className="description-header">Video content on Status</span>
                            <br/>
                            <span className="description-content">- Min. 1 mins duration</span>
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
                            <span className="description-header">Translations - Status app</span>
                            <br/>
                            <span className="description-content">- per 500 words</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            1,200 SNT
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Translations - Status website</span>
                            <br/>
                            <span className="description-content">- per 500 words</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            1,200 SNT
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Translations - documents or content</span>
                            <br/>
                            <span className="description-content">- per 500 words</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            1,200 SNT
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </Box>
);

export default ContentSecond;
