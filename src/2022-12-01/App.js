import React from "react";
import styled from "styled-components";

// APP.js에서 바로 사용 가능

const App = () => {
  const Button = styled.button`
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  return (
    <div>
      <Button>Nornal</Button>
      <Button primary>Primary</Button>
    </div>
  );
};

export default App;
