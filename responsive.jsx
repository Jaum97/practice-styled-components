//props to https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172

import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./styles.css";
import styled from "styled-components";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function getWidthString(span) {
  if (!span) return;

  let width = (span / 12) * 100;

  return `width: ${width}%;`;
}

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const Column = styled.div`
  float: left;
  width: 100%;

  ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;

const dfStyle = {
  // height: 120,
  borderWidth: 1,
  borderColor: 'black',
  borderStyle: 'solid',
  backgroundColor: '#D1D1D1',
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
}

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <Row style={{ backgroundColor: "red" }}>

    <Column style={dfStyle} xs="12" sm="6" md="4" >
    xs="12" sm="6" md="4"
      </Column>

      <Column style={dfStyle} xs="12" sm="6" md="4" >
      xs="12" sm="6" md="4"
      </Column>

      <Column style={dfStyle} xs="12" sm="12" md="4" >
      xs="12" sm="12" md="4"
      </Column>
    </Row>
  </div>
);

render(<App />, document.getElementById("root"));
