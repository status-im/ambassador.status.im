import React from 'react';
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

const CommunityBuildingFirst = (
    <Box>
        <table className="tg">
            <thead>
                <tr>
                    <th className="tg-header header-font">Community Building</th>
                </tr>                
                <tr>
                    <th className="tg-center header-font">Examples</th>
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
                            <span className="description-content">- e.g., moderating <a href="https://join.status.im/status-korean" target="_blank" rel="noopener noreferrer" className="table-link">#status-korean</a> & <a href="https://join.status.im/movie" target="_blank" rel="noopener noreferrer" className="table-link">#movie</a> public chats for 1 week.</span>
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
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Referral program bonus</span>
                            <br/>
                            <span className="description-content">- Additional bonus for participating in the referral program. Up to 10 referrals</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </Box>
);

export default CommunityBuildingFirst;
