import styled from "styled-components"
import LoggedInLayout from "../LoggedInLayout/Layout"
import PageHeading from "../../components/PageHeading/PageHeading"

const Mentorship = () => {
  return (
    <MentorshipContainer>
        <LoggedInLayout>
            <PageHeading heading={"Mentorship"}/>
        </LoggedInLayout>
    </MentorshipContainer>
  )
}

export default Mentorship

const MentorshipContainer = styled.div`
    
`