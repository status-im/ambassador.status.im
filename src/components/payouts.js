import React from 'react';
import styled from 'styled-components';
import { Container } from './boxes';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Carousel } from 'react-responsive-carousel';

import Events from './PayoutCategory/Events';
import ContentFirst from './PayoutCategory/ContentFirst';
import ContentSecond from './PayoutCategory/ContentSecond';
import CommunityBuildingFirst from './PayoutCategory/CommunityBuildingFirst';
import CommunityBuildingSecond from './PayoutCategory/CommunityBuildingSecond';
import Technical from './PayoutCategory/Technical'

const Line = styled.div`
    width: 30%;
    border-bottom: 1px solid #A8A8A8;

    @media(max-width: 1200px) {
        width: 25%;
    }

    @media(max-width: 770px) {
        position: absolute;
        width: 25%;
        left: ${props => { if (props.left) { return "0" } }};
        right: ${props => { if (props.right) { return "0" } }};
    }

    @media(max-width: 520px) {
        width: 22%;
    }

    @media(max-width: 370px) {
        width: 15%;
    }
`

const Title = styled.div`
    width: 25%;
    font-size: 1.8rem;
    color: #2C2C2C;
    margin: 0 2.5rem 0 2.5rem;
    text-align: center;

    @media(max-width: 1200px) {
        width: 35%;
    }

    @media(max-width: 1024px) {
        font-size: 1rem;
    }

    @media(max-width: 520px) {
        width: 50%;
    }

    @media(max-width: 370px) {
        width: 60%;
    }
`

const Payouts = () => {
    
        return (
            <ScrollableAnchor id={'payouts'}>
                <div style={{ marginTop: '3rem', paddingTop: '1rem'}}>
                        <Container style={{ marginTop: '2rem', marginBottom: '5rem'}}><Line left/><Title> Payout Structure & Tiers </Title><Line right/></Container>
                            <Carousel className="carousel-center desktop" showThumbs={false} showArrows={true} showStatus={false}>
                                {Events}
                                {ContentFirst}
                                {ContentSecond}
                                {CommunityBuildingFirst}
                                {CommunityBuildingSecond}
                                {Technical}
                            </Carousel>
                            <Carousel className="carousel-center mobile" showThumbs={false} showArrows={false} showStatus={false}>
                                {Events}
                                {ContentFirst}
                                {ContentSecond}
                                {CommunityBuildingFirst}
                                {CommunityBuildingSecond}
                                {Technical}
                            </Carousel>  
                            <Container style={{ marginTop: '1rem'}}>
                        </Container>
                </div>
            </ScrollableAnchor>
        );
}

export default Payouts;