import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
    background: black;
    width: 70%;
    height: auto;
    box-sizing: border-box;
    margin: 60px auto 70px auto;
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

const CommunityBuildingSecond = (
    <Box>
        <table className="tg">
            <thead>
                <tr>
                    <th className="tg-header header-font" colspan="2">Community Building</th>
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
                            <span className="description-header">Mentioning Status on other social channels</span>
                            <br/>
                            <span className="description-content">- Posting the latest updates or news on popular social channels (e.g., Reddit, Facebook, Twitter, Steemit, etc.)</span>
                            <br/>
                            <span className="description-content">- Up to 5 times per month</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            120 SNT
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Commenting on Status’ social channels</span>
                            <br/>
                            <span className="description-content">- <a href="https://www.facebook.com/ethstatus" target="_blank" rel="noopener noreferrer" className="table-link">Facebook</a></span>
                            <br/>
                            <span className="description-content">- <a href="https://twitter.com/ethstatus" target="_blank" rel="noopener noreferrer" className="table-link">Twitter</a></span>
                            <br/>
                            <span className="description-content">- <a href="https://www.reddit.com/r/statusim/" target="_blank" rel="noopener noreferrer" className="table-link">Reddit</a></span>
                            <br/>
                            <span className="description-content">- <a href="https://www.instagram.com/status.im/" target="_blank" rel="noopener noreferrer" className="table-link">Instagram</a></span>
                            <br/>
                            <span className="description-content">- <a href="https://discuss.status.im/" target="_blank" rel="noopener noreferrer" className="table-link">Discuss forum</a></span>
                            <br/>
                            <span className="description-content">- Up to 5 times per month</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            120 SNT
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Help register ENS names for other people</span>
                            <br/>
                            <span className="description-content">- Up to 10 ENS names</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            600 SNT
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </Box>
);

export default CommunityBuildingSecond;
