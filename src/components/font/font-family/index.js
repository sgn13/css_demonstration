import React, { useState } from "react";
import styled from "styled-components";
import { ActionWrapper } from "../../../containers/sideProperties";

const properties = [
  {
    id: 1,
    value: "Georgia",
  },
  {
    id: 2,
    value: "Times New Roman",
  },
  {
    id: 3,
    value: "Arial",
  },
  {
    id: 5,
    value: "Helvetica",
  },
  {
    id: 6,
    value: "Arial Black",
  },
  {
    id: 7,
    value: "Impact",
  },
  {
    id: 8,
    value: "serif",
  },
  {
    id: 9,
    value: "cursive",
  },
  {
    id: 10,
    value: "fantasy",
  },
  {
    id: 11,
    value: "monospace",
  },
];
const index = () => {
  const [value, setValue] = useState("Arial");

  const ContentWrapper = styled.div`
    display: flex;
    font-family: ${(props) => props.changedValue};
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
            font-family: {property.value};
          </p>
        ))}
      </ActionWrapper>
      <ContentWrapper changedValue={value}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
        nobis?
      </ContentWrapper>
    </>
  );
};

export default index;
