import styled from "styled-components"
import { theme } from "../../styles/theme"

const TaskStatusSection = () => {
  return (
    <TaskStatusSectionContainer>
      <h2>Hello WOrld</h2>
    </TaskStatusSectionContainer>
  )
}

export default TaskStatusSection

const TaskStatusSectionContainer = styled.div`
  display: flex;
  width: 25rem;
  height: 30rem;
  border: 2px solid ${theme.borderColor};
  border-radius: 1rem;
`