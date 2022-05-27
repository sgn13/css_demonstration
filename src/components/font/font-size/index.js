import React, { useState } from "react";
import styled from "styled-components";
import { ActionWrapper } from "../../../containers/sideProperties";

const properties = [
  {
    id: 1,
    value: "1pt",
  },
  {
    id: 2,
    value: "16px",
  },
  {
    id: 3,
    value: "32px",
  },
  {
    id: 4,
    value: "1rem",
  },
  {
    id: 5,
    value: "2rem",
  },
  {
    id: 6,
    value: "1cm",
  },
  {
    id: 7,
    value: "1in",
  },
  {
    id: 8,
    value: "1mm",
  },
  {
    id: 9,
    value: "pc",
  },
];

const index = () => {
  const [value, setValue] = useState("Arial");

  const ContentWrapper = styled.div`
    display: flex;
    font-size: ${(props) => props.changedValue};
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
            font-size: {property.value};
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
