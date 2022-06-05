import React, { useState } from "react";
import styled from "styled-components";
import { ActionWrapper } from "../../containers/sideProperties";
import wallpaper from "../../assets/images/wallpaper1.jpeg";
const properties = [
  {
    id: 1,
    value: "blur(2px)",
  },
  {
    id: 2,
    value: "brightness(60%)",
  },
  {
    id: 3,
    value: "contrast(40%)",
  },
  {
    id: 4,
    value: "drop-shadow(4px 4px 10px blue)",
  },
  {
    id: 5,
    value: "grayscale(30%)",
  },
  {
    id: 6,
    value: "hue-rotate(120deg)",
  },
  {
    id: 7,
    value: "invert(70%)",
  },
  {
    id: 8,
    value: "opacity(70%)",
  },
  {
    id: 9,
    value: "sepia(90%)",
  },
  {
    id: 10,
    value: "saturate(80%)",
  },
];
const index = () => {
  const [value, setValue] = useState("blur(2px)");
  const ContentWrapper = styled.div`
    display: flex;
    background-image: url(${wallpaper});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-backdrop-filter: ${(props) => props.changedValue};
    backdrop-filter: ${(props) => props.changedValue};
    padding: 1rem;
    flex: 5;

    @supports (backdrop-filter: ${(props) => props.changedValue}) or
      (--webkit-backdrop-filter: ${(props) => props.changedValue}) {
      & {
        background-color: rgba(0, 255, 0, 0.5);
        backdrop-filter: ${(props) => props.changedValue};
      }
    }

    .box {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 5px;
      font-family: sans-serif;
      text-align: center;

      -webkit-backdrop-filter: ${(props) => props.changedValue};
      backdrop-filter: ${(props) => props.changedValue};

      padding: 20px;
    }

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
            backdrop-filter: {property.value};
          </p>
        ))}
      </ActionWrapper>
      <ContentWrapper changedValue={value}>
        <div className="box">Hell Yeah</div>
      </ContentWrapper>
    </>
  );
};

export default index;
