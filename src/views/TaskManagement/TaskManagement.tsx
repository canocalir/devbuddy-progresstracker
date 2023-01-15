import styled from "styled-components";
import PageHeading from "../../components/PageHeading/PageHeading";
import LoggedInLayout from "../LoggedInLayout/Layout";

const TaskManagement = () => {
  return (
    <TaskManagementContainer>
      <LoggedInLayout>
        <PageHeading heading={"Task Management"} />
      </LoggedInLayout>
    </TaskManagementContainer>
  );
};

export default TaskManagement;


const TaskManagementContainer = styled.div`
    
`