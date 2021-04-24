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

const Technical = (
    <Box>
        <table className="tg">
            <thead>
                <tr>
                    <th className="tg-header header-font" colspan="2">Technical</th>
                </tr>                
                <tr>
                    <th className="tg-center header-font">Examples</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Technical blog post or tutorial</span>
                            <br/>
                            <span className="description-content">- Min. 500 words</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Github pull request</span>
                            <br/>
                            <span className="description-content">- Should be merged or have some comments from core contributors</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Github issue</span>
                            <br/>
                            <span className="description-content">- Should be mentioned or have some comments from core contributors</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="tg-left">
                        <div className="align-center">
                            <span className="description-header">Building a dapp using Embark</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </Box>
);

export default Technical;
