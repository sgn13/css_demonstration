import styled from "styled-components";

export const ActionWrapper = styled.div`
  width: 100%;
  flex: 2;
  background-color: #ddd;
  max-height: 50vh;
  overflow-y: auto;
  .property_name {
    position: relative;
    background-color: white;
    padding: 0.5rem;
    margin: 0.3rem;
    cursor: pointer;
    transition: 0.5s ease-out;
    &:hover {
      background-color: #ddd;
    }
    &.active {
      background-color: #ddd;
      font-weight: 600;
    }
  }
  .tooltip {
    position: relative;
  }
  .clipboard {
    position: absolute;
    color: #999;
    right: 1%;
    top: 0%;
    transition: 0.3s ease;
    &:hover {
      color: #555;
    }
  }
  /*left position*/

  .tooltip .tooltiptext {
    visibility: hidden;
    background-color: black;
    color: white;
    text-align: center;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.2rem 0.5rem;
    /* Position the tooltip */
    position: absolute;
    z-index: 9999999;
    top: -170%;
    left: -10;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
  /* @media (max-width: 768px) {
    & {
      height: auto;

      overflow-y: hidden;
    }
  } */
`;
