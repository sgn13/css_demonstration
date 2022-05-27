import React, { useState } from "react";
import styled from "styled-components";
import { ActionWrapper } from "../../containers/sideProperties";

const properties = [
  {
    id: 1,
    value: "steelblue",
  },
  {
    id: 2,
    value: "hsl(136, 35%, 70%)",
  },
  {
    id: 3,
    value: "#4ac2b1",
  },

  {
    id: 5,
    value: "rgb(108, 146, 184)",
  },
];
const index = () => {
  const [value, setValue] = useState("steelblue");
  const ContentWrapper = styled.div`
    display: flex;
    background-color: ${(props) => props.changedValue};
    padding: 1rem;
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
    <>
      <ActionWrapper>
        {properties.map((property) => (
          <p
            className={`property_name ${
              property.value === value ? "active" : ""
            }`}
            onClick={() => setValue(property.value)}
          >
            background-color: {property.value};
          </p>
        ))}
      </ActionWrapper>
      <ContentWrapper changedValue={value}>Change me</ContentWrapper>
    </>
  );
};

export default index;
