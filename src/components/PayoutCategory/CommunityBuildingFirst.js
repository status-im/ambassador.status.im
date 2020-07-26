import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
    background: black;
    width: 70%;
    height: auto;
    box-sizing: border-box;
    margin: 50px auto 70px auto;
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

const CommunityBuildingFirst = (
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
                            <span className="description-header">Status public chats moderations</span>
                            <br/>
                            <span className="description-content">- Answering questions or sharing news and updates on Status in public chats</span>
                            <br/>
                            <span className="description-content">- Welcome newcomers</span>
                            <br/>
                            <span className="description-content">- e.g., moderating #status-korean & #movie public chats for 1 week.</span>
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
                            <span className="description-header">Ambassador referral</span>
                            <br/>
                            <span className="description-content">- Up to 3 referrals</span>
                            <br/>
                            <span className="description-content">- New ambassadors should complete at least 2 tasks</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            1,000 SNT
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Referral program bonus</span>
                            <br/>
                            <span className="description-content">- Additional bonus for participating in the referral program</span>
                        </div>
                    </td>
                    <td className="tg-center">
                        <div className="reward-font">
                            200 SNT
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </Box>
);

export default CommunityBuildingFirst;
