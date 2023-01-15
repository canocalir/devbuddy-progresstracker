import styled from "styled-components";
import PageHeading from "../../components/PageHeading/PageHeading";
import LoggedInLayout from "../LoggedInLayout/Layout";

const Dashboard = () => {
  return (
    <DashboardViewContainer>
      <LoggedInLayout>
        <PageHeading heading={"Dashboard"} />
      </LoggedInLayout>
    </DashboardViewContainer>
  );
};

export default Dashboard;


const DashboardViewContainer = styled.div`
  
`