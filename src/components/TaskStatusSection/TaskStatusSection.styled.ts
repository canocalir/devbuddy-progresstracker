import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { PriorityProps } from "../../types/taskStatusTypes";

//!Mixins
const priorityButton = css`
  color: #ffffff;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const buttonShadow = `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`;

const TaskPriorityContainer = styled.div<PriorityProps>`
  display: flex;
  gap: 2rem;
  > div {
    cursor: pointer;
    border: none;
  }
  > div:nth-child(1) {
    background-color: ${(props) =>
      props.selected === 0 ? "#2ce62c" : "green"};
    box-shadow: ${(props) => props.selected === 0 && buttonShadow};
    color: #ffffff;
    ${priorityButton};
  }
  > div:nth-child(2) {
    background-color: ${(props) =>
      props.selected === 1 ? "#ffb81e" : "orange"};
    box-shadow: ${(props) => props.selected === 1 && buttonShadow};
    color: #ffffff;
    ${priorityButton};
  }
  > div:nth-child(3) {
    background-color: ${(props) => (props.selected === 2 ? "#f70d1a" : "red")};
    box-shadow: ${(props) => props.selected === 2 && buttonShadow};
    color: #ffffff;
    ${priorityButton};
  }
`;

const TaskAddButton = styled.button`
  width: 100%;
  border-radius: 1rem;
  padding: 0.5rem;
  color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: purple;
  &:hover {
    background-color: #ad38ad;
  }
`;

const TaskStatusSectionContainer = styled.div`
  display: flex;
  padding: 2rem;
  gap: 1rem;
  flex-direction: column;
  width: 22rem;
  height: 30rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;
  align-items: center;
  > h1 {
    font-size: 1.7rem;
  }
  > button {
    background-color: ${theme.borderColor};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    color: #ffffff;
    font-weight: 600;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &:hover {
      cursor: pointer;
      background-color: #8d49a1;
    }
  }
  > form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: fit-content;
    padding: 1rem;
    gap: 1rem;
  }
`;

export { TaskStatusSectionContainer, TaskAddButton, TaskPriorityContainer };
