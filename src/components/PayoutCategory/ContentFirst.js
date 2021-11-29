import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: black;
  width: 70%;
  height: auto;
  box-sizing: border-box;
  margin: 60px auto 60px auto;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    width: 90%;
    margin: 50px auto 70px auto;
  }

  hr {
    width: 80px;
    border: 1px solid #a8a8a8;
    margin-top: 40px;
  }
`;

const ContentFirst = (
  <Box>
    <table className="tg">
      <thead>
        <tr>
          <th className="tg-header header-font">Content</th>
        </tr>
        <tr>
          <th className="tg-center header-font">Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="tg-left">
            <div className="align-center">
              <span className="description-header">Blog post or article</span>
              <br />
              <span className="description-content">
                -{" "}
                <a
                  href="https://our.status.im/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="table-link"
                >
                  Our Status
                </a>
              </span>
              <br />
              <span className="description-content">
                - Third-party blog platforms (Medium, Steemit, etc.)
              </span>
              <br />
              <span className="description-content">- Min. 600 words</span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="tg-left">
            <div className="align-center">
              <span className="description-header">Infographic</span>
              <br />
              <span className="description-content">
                - More than 6 data fields (e.g., the number of ENS registrations
                from https://analytics.status.im/)
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="tg-left">
            <div className="align-center">
              <span className="description-header">Design assets</span>
              <br />
              <span className="description-content">
                - Graphics about Status
              </span>
              <br />
              <span className="description-content">- ↑ 3 images</span>
              <br />
              <span className="description-content">- Brand guidelines</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </Box>
);

export default ContentFirst;
