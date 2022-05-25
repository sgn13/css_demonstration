import React, { useState } from "react";
import styled from "styled-components";
import { ActionWrapper } from "../../../containers/sideProperties";

const properties = [
  {
    id: 1,
    value: "center",
  },
  {
    id: 2,
    value: "start",
  },
  {
    id: 3,
    value: "end",
  },
  {
    id: 4,
    value: "space-between",
  },
  {
    id: 5,
    value: "space-around",
  },
  {
    id: 6,
    value: "space-evenly",
  },
  {
    id: 7,
    value: "stretch",
  },
  {
    id: 8,
    value: "flex-start",
  },
  {
    id: 9,
    value: "flex-end",
  },
  {
    id: 10,
    value: "left",
  },
  {
    id: 11,
    value: "right",
  },
];
const index = () => {
  const [value, setValue] = useState("center");

  const ContentWrapper = styled.div`
    display: flex;
    justify-content: ${(props) => props.justify_content};
    padding: 1em;
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
    <>
      <ActionWrapper>
        {properties.map((property) => (
          <p
            className={`property_name ${
              property.value === value ? "active" : ""
            }`}
            onClick={() => setValue(property.value)}
          >
            justify-content: {property.value};
          </p>
        ))}
      </ActionWrapper>
      <ContentWrapper justify_content={value}>
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </ContentWrapper>
    </>
  );
};

export default index;
