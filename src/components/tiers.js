import React from 'react';
import styled from 'styled-components';
import { Container } from './boxes';
import ScrollableAnchor from 'react-scrollable-anchor'

//Containers of tier1
const Tier1 = styled.div`
    width: 380px;
    height: 310px;
    margin: 0 1% 2% 1%;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 7px 7px 13px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    position: relative;
    float: left;

    @media(max-width: 1250px) {
        width: 320px;
        height: auto;
    }

    @media(max-width: 1024px) {
        text-align: center;
        margin: 0 10rem 3rem 10rem;
        width: 80vw;
        height: 200px;
        font-size: 1rem;
        padding-bottom: 1.5rem;
        margin: 3vw;
    }
`

//reward of tier1
const RewardTier1 = styled.div`
    width: 100%;
    margin: 0;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 7px 7px 13px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    text-align: center;
    height: 70px;
    line-height: 70px;
    bottom: 0;
    color: white;
    position: absolute;
    font-size: 24px;
    vertical-align: middle;

    @media(max-width: 1024px) {
        height: 50px;
        line-height: 50px;
        font-size: 20px;
    }
`

//Containers of tier2
const Tier2 = styled.div`
    width: 380px;
    height: 310px;
    margin: 0 1% 2% 1%;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 7px 7px 13px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    position: relative;
    float: left;

    @media(max-width: 1250px) {
        width: 320px;
        height: auto;
    }

    @media(max-width: 1024px) {
        text-align: center;
        margin: 0 10rem 3rem 10rem;
        width: 80vw;
        height: 220px;
        padding-bottom: 1.5rem;
        margin: 3vw;
    }
`

//reward of tier2
const RewardTier2 = styled.div`
    width: 100%;
    margin: 0;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 7px 7px 13px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    text-align: center;
    height: 70px;
    line-height: 70px;
    bottom: 0;
    color: white;
    position: absolute;
    font-size: 24px;
    vertical-align: middle;

    @media(max-width: 1024px) {
        height: 50px;
        line-height: 50px;
        font-size: 20px;
    }
`

//Containers of tier3
const Tier3 = styled.div`
    width: 380px;
    height: 310px;
    margin: 0 1% 2% 1%;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 7px 7px 13px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    position: relative;
    float: left;

    @media(max-width: 1250px) {
        width: 320px;
        height: auto;
    }

    @media(max-width: 1024px) {
        text-align: center;
        margin: 0 10rem 3rem 10rem;
        width: 80vw;
        height: 220px;
        padding-bottom: 1.5rem;
        margin: 3vw;
    }
`

//reward of tier3
const RewardTier3 = styled.div`
    width: 100%;
    margin: 0;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 7px 7px 13px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    text-align: center;
    height: 70px;
    line-height: 70px;
    bottom: 0;
    color: white;
    position: absolute;
    font-size: 24px;
    vertical-align: middle;

    @media(max-width: 1024px) {
        height: 50px;
        line-height: 50px;
        font-size: 20px;
    }
`

//The first line in the box
const Firstline = styled.p`
    font-weight: 500;
    text-align:left;
    font-size: 1.5rem;
    line-height: 23px;
    margin-top: 2rem;
    color: #FFFFFF;
    margin-left: 2rem;

    @media(max-width: 1024px) {
        margin-left: 0rem;
        font-size: 1.3rem;
        text-align: center;
    }
`

//The second line in the boxs
const Secondline = styled(Firstline)`
    font-size: 20px;
    margin-top: 1.5rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    height: 130px;
    line-height: 1.5;

    @media(max-width: 1250px) {
        height: 145px;
    }

    @media(max-width: 1024px) {
        margin-left: 2rem;
        margin-top: 1rem;
        font-size: 1rem;
        height: auto;
    }
`

const Tiers = () => {
    
        return (
            <ScrollableAnchor id={'tiers'}>
                <div style={{ marginTop: '3rem', marginBottom: '1rem'}}>
                <Container>
                        <Tier1>
                            <Firstline>Tier1 tasks</Firstline>
                            <Secondline>e.g., Welcoming newcomers in public chats, introducing Status to friends, or inviting people to download Status.</Secondline>
                            <RewardTier1>Ambassador recognition</RewardTier1>
                        </Tier1>
                        <Tier2>
                            <Firstline>Tier2 tasks</Firstline>
                            <Secondline>Create content for Status, commenting on Status social channels, or translating Status into other languages.</Secondline>
                            <RewardTier2>Base rewards</RewardTier2>
                        </Tier2>
                        <Tier3>
                            <Firstline>Tier3 tasks</Firstline>
                            <Secondline>e.g., Business partnerships, memes with a lot of tractions, or technical contributions.</Secondline>
                            <RewardTier3>Higher rewards</RewardTier3>
                        </Tier3>
                    </Container>
                </div>
            </ScrollableAnchor>
        );
}

export default Tiers;