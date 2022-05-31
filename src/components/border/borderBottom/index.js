import React, { useState } from "react";
import styled from "styled-components";
import { ActionWrapper } from "../../../containers/sideProperties";

const properties = [
  {
    id: 1,
    value: "5px solid steelblue",
  },
  {
    id: 2,
    value: "5px dotted red",
  },
  {
    id: 3,
    value: "5px dashed blue",
  },
  {
    id: 4,
    value: "5px inset",
  },
  {
    id: 5,
    value: "5px outset",
  },
  {
    id: 6,
    value: "5px ridge",
  },
  {
    id: 7,
    value: "5px groove",
  },
  {
    id: 8,
    value: "double",
  },
];

const index = ({ border, borderBottom }) => {
  const [value, setValue] = useState("5px solid steelblue");

  const ContentWrapper = styled.div`
    display: flex;
    border-bottom: ${(props) => props.changedValue};
    padding: 1rem;
    flex: 5;
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
            border-bottom: {property.value};
          </p>
        ))}
      </ActionWrapper>
      <ContentWrapper changedValue={value}>Change me</ContentWrapper>
    </>
  );
};

export default index;
