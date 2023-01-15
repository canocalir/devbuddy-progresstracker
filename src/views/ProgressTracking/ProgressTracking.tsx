import styled from "styled-components";
import LoggedInLayout from "../LoggedInLayout/Layout";
import PageHeading from "../../components/PageHeading/PageHeading";

const ProgressTracking = () => {
  return (
    <ProgressTrackingContainer>
        <LoggedInLayout>
            <PageHeading heading={"Progress Tracking"}/>
        </LoggedInLayout>
    </ProgressTrackingContainer>
  );
};

export default ProgressTracking;

const ProgressTrackingContainer = styled.div``;
