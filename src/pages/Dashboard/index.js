import React, { useState } from "react";
import { properties } from "../../constants/properties";

import JustifyContent from "../../components/flex/justify-content/index";
import FlexDirection from "../../components/flex/flex-direction/index";
import BackdropFilter from "../../components/backdrop-filter/index";
import BackgroundColor from "../../components/background/index";
import FontFamily from "../../components/font/font-family/index.js";
import FontSize from "../../components/font/font-size/index.js";
import FontStyle from "../../components/font/font-style/index.js";
import Border from "../../components/border/index.js";
import Padding from "../../components/padding/index.js";
import Margin from "../../components/margin/index.js";
import ZIndex from "../../components/z-index/index.js";

import styled from "styled-components";

const MainContentWrapper = styled.div`
  display: flex;
  padding: 2rem;
  height: 50vh;
  background-color: #f9f9f9;
  justify-content: space-between;
  @media (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;
const TextCenter = styled.div`
  width: 100%;
  text-align: center;
`;
const index = () => {
  const [selector, setSelector] = useState("margin");

  const components = [
    {
      name: "justify-content",
      component: <JustifyContent />,
    },
    {
      name: "backdrop-filter",
      component: <BackdropFilter />,
    },
    {
      name: "background-color",
      component: <BackgroundColor />,
    },
    {
      name: "flex-direction",
      component: <FlexDirection />,
    },
    {
      name: "font-family",
      component: <FontFamily />,
    },
    {
      name: "font-family",
      component: <FontFamily />,
    },
    {
      name: "font-size",
      component: <FontSize />,
    },
    {
      name: "font-style",
      component: <FontStyle />,
    },
    {
      name: "border",
      component: <Border keyName="border" />,
    },
    {
      name: "border-bottom",
      component: <Border keyName="border-bottom" />,
    },
    {
      name: "border-top",
      component: <Border keyName="border-top" />,
    },
    {
      name: "border-right",
      component: <Border keyName="border-right" />,
    },
    {
      name: "border-left",
      component: <Border keyName="border-left" />,
    },
    {
      name: "padding",
      component: <Padding keyName="padding" />,
    },
    {
      name: "padding-top",
      component: <Padding keyName="padding-top" />,
    },
    {
      name: "padding-right",
      component: <Padding keyName="padding-right" />,
    },
    {
      name: "padding-bottom",
      component: <Padding keyName="padding-bottom" />,
    },
    {
      name: "padding-left",
      component: <Padding keyName="padding-left" />,
    },
    {
      name: "margin",
      component: <Margin keyName="margin" />,
    },
    {
      name: "margin-top",
      component: <Margin keyName="margin-top" />,
    },
    {
      name: "margin-right",
      component: <Margin keyName="margin-right" />,
    },
    {
      name: "margin-bottom",
      component: <Margin keyName="margin-bottom" />,
    },
    {
      name: "margin-left",
      component: <Margin keyName="margin-left" />,
    },
    {
      name: "z-index",
      component: <ZIndex />,
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
        {components.find((list) => list.name === selector) ? (
          components.find((list) => list.name === selector)?.component
        ) : (
          <TextCenter>
            <h3>Building on process ... </h3>
          </TextCenter>
        )}
      </MainContentWrapper>
    </div>
  );
};

export default index;
