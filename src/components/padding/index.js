import React, { useState } from "react";
import styled from "styled-components";
import { ActionWrapper } from "../../containers/sideProperties";
import { keyValue } from "./const";

const index = ({ keyName }) => {
  const [value, setValue] = useState("10px");

  const ContentWrapper = styled.div`
    display: grid;
    place-items: center;
    padding: 1rem;
    flex: 5;
    .padding_element {
      padding: 0.5rem;
      padding: ${(props) =>
        props.propertyName === "padding" ? props.changedValue : ""};
      padding-bottom: ${(props) =>
        props.propertyName === "padding-bottom" ? props.changedValue : ""};
      padding-top: ${(props) =>
        props.propertyName === "padding-top" ? props.changedValue : ""};
      padding-right: ${(props) =>
        props.propertyName === "padding-right" ? props.changedValue : ""};
      padding-left: ${(props) =>
        props.propertyName === "padding-left" ? props.changedValue : ""};
      background: red;
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
        <div className="padding_element">Change my padding</div>
      </ContentWrapper>
    </>
  );
};

export default index;
