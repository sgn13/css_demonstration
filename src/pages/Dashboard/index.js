import React, { useState } from "react";
import { properties } from "../../constants/properties";
import JustifyContent from "../../components/flex/justify-content/index";
import FlexDirection from "../../components/flex/flex-direction/index";
import BackgroundColor from "../../components/background/index";
import styled from "styled-components";

const MainContentWrapper = styled.div`
  display: flex;
  padding: 2rem;
  height: 50vh;
  background-color: #f9f9f9;
  justify-content: space-between;
`;
const index = () => {
  const [selector, setSelector] = useState("justify-content");

  const components = [
    {
      name: "justify-content",
      component: <JustifyContent />,
    },
    {
      name: "background-color",
      component: <BackgroundColor />,
    },
    {
      name: "flex-direction",
      component: <FlexDirection />,
    },
  ];
  return (
    <div id="main">
      <div className="header">
        <h1>CSS Live Demo</h1>
        <select
          name="selector"
          id=""
          onChange={(e) => setSelector(e.target.value)}
          value={selector}
        >
          {properties.map((property, index) => (
            <option value={property} key={index}>
              {property}
            </option>
          ))}
        </select>
      </div>
      <MainContentWrapper>
        {components.find((list) => list.name === selector)?.component}
      </MainContentWrapper>
    </div>
  );
};

export default index;
