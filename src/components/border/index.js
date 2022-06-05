import React, { useState } from "react";
import styled from "styled-components";
import { ActionWrapper } from "../../containers/sideProperties";
import { keyValue } from "./const";

const index = ({ keyName }) => {
  const [value, setValue] = useState("5px solid steelblue");

  const ContentWrapper = styled.div`
    display: flex;
    border: ${(props) =>
      props.propertyName === "border" ? props.changedValue : "none"};
    border-bottom: ${(props) =>
      props.propertyName === "border-bottom" ? props.changedValue : ""};
    border-top: ${(props) =>
      props.propertyName === "border-top" ? props.changedValue : ""};
    border-right: ${(props) =>
      props.propertyName === "border-right" ? props.changedValue : ""};
    border-left: ${(props) =>
      props.propertyName === "border-left" ? props.changedValue : ""};
    padding: 1rem;
    flex: 5;
  `;
  const selected = keyValue.find((list) => list.name === keyName);

  return (
    <>
      <ActionWrapper>
        {selected &&
          selected.properties.map((a) => (
            <p
              className={`property_name ${a.value === value ? "active" : ""}`}
              onClick={() => setValue(a.value)}
            >
              {selected.name}: {a.value};
            </p>
          ))}
      </ActionWrapper>

      <ContentWrapper changedValue={value} propertyName={selected?.name}>
        Change me
      </ContentWrapper>
    </>
  );
};

export default index;
