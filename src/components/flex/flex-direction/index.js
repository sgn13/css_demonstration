import React, { useState } from "react";
import styled from "styled-components";

const properties = [
  {
    id: 1,
    value: "row",
  },
  {
    id: 2,
    value: "column",
  },
  {
    id: 3,
    value: "row-reverse",
  },
  {
    id: 4,
    value: "column-reverse",
  },
];
const index = () => {
  const [css, setCss] = useState("");

  const MainContentWrapper = styled.div`
    display: flex;
    padding: 2rem;
    background-color: white;
    justify-content: space-between;
    &:first-child {
      background-color: red;
      padding: 1rem;
    }
  `;

  const ActionWrapper = styled.div`
    width: 100%;
    flex: 2;
    background-color: #ddd;
    height: 50vh;
    overflow-y: auto;
    .property_name {
      background-color: white;
      padding: 0.5rem;
      margin: 0.3rem;
      cursor: pointer;
      transition: 0.5s ease-out;
      &:hover {
        background-color: #ddd;
      }
    }
  `;

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    padding: 4em;
    background: #f1f1f1;
    flex: 5;

    div {
      margin: 3rem;
      padding: 1rem;
      height: 3rem;
      &:nth-child(1) {
        background-color: hsl(136, 35%, 70%);
      }
      &:nth-child(2) {
        background-color: hsl(289, 27%, 75%);
      }
      &:nth-child(3) {
        background-color: hsl(13, 27%, 75%);
      }
    }
  `;

  return (
    <MainContentWrapper>
      <ActionWrapper>
        {properties.map((property) => (
          <p className="property_name" onClick={() => setCss(property.value)}>
            justify-content: {property.value};
          </p>
        ))}
      </ActionWrapper>
      <ContentWrapper flexDirection={css}>
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </ContentWrapper>
    </MainContentWrapper>
  );
};

export default index;
