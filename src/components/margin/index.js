import React, { useState } from "react";
import styled from "styled-components";
import { ActionWrapper } from "../../containers/sideProperties";
import { keyValue } from "./const";

const index = ({ keyName }) => {
  const [value, setValue] = useState("10px");

  const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    padding: 1rem;
    flex: 5;
    .margin_wrapper {
      background-color: white;
    }
    .margin_element {
      padding: 0.5rem;
      margin: ${(props) =>
        props.propertyName === "margin" ? props.changedValue : ""};
      margin-bottom: ${(props) =>
        props.propertyName === "margin-bottom" ? props.changedValue : ""};
      margin-top: ${(props) =>
        props.propertyName === "margin-top" ? props.changedValue : ""};
      margin-right: ${(props) =>
        props.propertyName === "margin-right" ? props.changedValue : ""};
      margin-left: ${(props) =>
        props.propertyName === "margin-left" ? props.changedValue : ""};
      background: red;
      border: 1px solid silver;
    }
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
        <div className="margin_wrapper">
          <div className="margin_element">Change my margin</div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default index;
