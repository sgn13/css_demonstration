import styled from "styled-components";

export const ActionWrapper = styled.div`
  width: 100%;
  flex: 2;
  background-color: #ddd;
  height: 50vh;
  overflow-y: auto;
  .property_name {
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
  @media (max-width: 768px) {
    & {
      height: auto;

      overflow-y: hidden;
    }
  }
`;
