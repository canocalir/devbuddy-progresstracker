import styled from "styled-components";
import PageHeading from "../../components/PageHeading/PageHeading";
import LoggedInLayout from "../LoggedInLayout/Layout";
import TaskStatusSection from "../../components/TaskStatusSection/TaskStatusSection";

const TaskManagement = () => {
  return (
    <>
      <LoggedInLayout>
      <PageHeading heading={"Task Management"} />
        <TaskManagementContainer>
          <TaskStatusContainer>
            <TaskStatusSection title={'Backlog'}/>
            <TaskStatusSection title={'In Progress'}/>
            <TaskStatusSection title={'Completed'}/>
          </TaskStatusContainer>
        </TaskManagementContainer>
      </LoggedInLayout>
    </>
  );
};

export default TaskManagement;

const TaskManagementContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const TaskStatusContainer = styled.div`
  display: flex;
  gap:2rem;
  flex-wrap: wrap;
`;
