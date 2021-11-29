import React from "react";
import styled from "styled-components";
import { Container } from "./boxes";
import ScrollableAnchor from "react-scrollable-anchor";
import { Carousel } from "react-responsive-carousel";

import Events from "./PayoutCategory/Events";
import ContentFirst from "./PayoutCategory/ContentFirst";
import ContentSecond from "./PayoutCategory/ContentSecond";
import CommunityBuildingFirst from "./PayoutCategory/CommunityBuildingFirst";
import CommunityBuildingSecond from "./PayoutCategory/CommunityBuildingSecond";
import Technical from "./PayoutCategory/Technical";

const Title = styled.div`
  font-size: 1.8rem;
  color: white;
  margin: 0 2.5rem 0 2.5rem;
  text-align: center;

  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

const Payouts = () => {
  return (
    <ScrollableAnchor id={"payouts"}>
      <div style={{ marginTop: "3rem", paddingTop: "1rem" }}>
        <div style={{ backgroundColor: "black", paddingTop: "50px" }}>
          <Title> Ambassador Action </Title>
        </div>
        <Carousel
          className="carousel-center desktop"
          showThumbs={false}
          showArrows={true}
          showStatus={false}
        >
          {Events}
          {ContentFirst}
          {ContentSecond}
          {CommunityBuildingFirst}
          {CommunityBuildingSecond}
          {Technical}
        </Carousel>
        <Carousel
          className="carousel-center mobile"
          showThumbs={false}
          showArrows={false}
          showStatus={false}
        >
          {Events}
          {ContentFirst}
          {ContentSecond}
          {CommunityBuildingFirst}
          {CommunityBuildingSecond}
          {Technical}
        </Carousel>
        <Container style={{ marginTop: "1rem" }}></Container>
      </div>
    </ScrollableAnchor>
  );
};

export default Payouts;
