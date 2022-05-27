import React, { useState } from "react";
import styled from "styled-components";
import { ActionWrapper } from "../../../containers/sideProperties";

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
  const [value, setValue] = useState("row");

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => props.changedValue};
    padding: 1rem;
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
      <ContentWrapper changedValue={value}>
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </ContentWrapper>
    </>
  );
};

export default index;
