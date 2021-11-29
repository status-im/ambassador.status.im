import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "./boxes";
import { Link } from "./tasks";

const Line = styled.div`
  width: 35%;
  border-bottom: 1px solid #a8a8a8;

  @media (max-width: 1100px) {
    width: 24%;
  }

  @media (max-width: 770px) {
    position: absolute;
    width: 30%;
    left: ${(props) => {
      if (props.left) {
        return "0";
      }
    }};
    right: ${(props) => {
      if (props.right) {
        return "0";
      }
    }};
  }
`;

const Title = styled.div`
  width: 15%;
  font-size: 1.8rem;
  color: #2c2c2c;
  margin: 0 2.5rem 0 2.5rem;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1rem;
    width: 30%;
  }
`;

const Link2 = styled(Link)`
  margin-top: 5rem;

  @media (max-width: 1100px) {
    margin-top: 4rem;
  }

  @media (max-width: 770px) {
    margin: 3rem auto;
    line-height: 180%;
    width: 80%;
  }
`;

//A blank put at the bottom
const Blank = styled(Container)`
  margin: 5rem;

  @media (max-width: 770px) {
    margin: 1.5rem;
  }
`;

class Contact extends Component {
  render() {
    return (
      <div style={{ display: "block", marginTop: "8rem" }}>
        <Container>
          <Line left />
          <Title> Get in touch </Title>
          <Line right />
        </Container>
        <Link2>
          {" "}
          <a
            href="https://join.status.im/ambassador-global"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Contact us in the Status Hangout channel #ambassador-global{" "}
          </a>{" "}
        </Link2>
        <Blank />
      </div>
    );
  }
}

export default Contact;
