import styled from "styled-components"
import LoggedInLayout from "../LoggedInLayout/Layout"
import PageHeading from "../../components/PageHeading/PageHeading"

const Feedback = () => {
  return (
    <FeedbackContainer>
        <LoggedInLayout>
            <PageHeading heading={"Feedback"}/>
        </LoggedInLayout>
    </FeedbackContainer>
  )
}

export default Feedback

const FeedbackContainer = styled.div`
    

`