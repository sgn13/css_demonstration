import React, { useState } from "react";
import styled from "styled-components";
import { ActionWrapper } from "../../containers/sideProperties";

const properties = [
  {
    id: 1,
    value: "1",
  },
  {
    id: 2,
    value: "3",
  },
  {
    id: 3,
    value: "10",
  },
];
const index = () => {
  const [value, setValue] = useState("1");

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => props.changedValue};
    padding: 1rem;
    background: #f1f1f1;
    flex: 5;
    position: relative;

    div {
      position: absolute;
      margin: 3rem;
      height: 5rem;
      width: 5rem;
      padding: 1rem;
      border: 2px solid black;
      &:nth-child(1) {
        left: 2%;
        top: 2%;
        background-color: red;
        z-index: ${(props) => props.changedValue};
      }
      &:nth-child(2) {
        left: 5%;
        top: 5%;
        z-index: 2;
        background-color: hsl(289, 27%, 75%);
      }
      &:nth-child(3) {
        left: 9%;
        top: 9%;
        z-index: 5;
        background-color: hsl(13, 27%, 75%);
      }
    }
  `;

  return (
    <>
      <ActionWrapper>
        {properties.map((property) => (
          <p
            className={`property_name ${
              property.value === value ? "active" : ""
            }`}
            onClick={() => setValue(property.value)}
          >
            z-index: {property.value};
          </p>
        ))}
      </ActionWrapper>
      <ContentWrapper changedValue={value}>
        <div>{value}</div>
        <div>2</div>
        <div>5</div>
      </ContentWrapper>
    </>
  );
};

export default index;
