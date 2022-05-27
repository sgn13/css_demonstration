import React, { useState } from "react";
import styled from "styled-components";
import { ActionWrapper } from "../../../containers/sideProperties";

const properties = [
  {
    id: 1,
    value: "normal",
  },
  {
    id: 2,
    value: "italic",
  },
  {
    id: 3,
    value: "oblique",
  },
];

const index = () => {
  const [value, setValue] = useState("normal");

  const ContentWrapper = styled.div`
    display: flex;
    font-style: ${(props) => props.changedValue};
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
            font-style: {property.value};
          </p>
        ))}
      </ActionWrapper>
      <ContentWrapper changedValue={value}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, alias.
      </ContentWrapper>
    </>
  );
};

export default index;
