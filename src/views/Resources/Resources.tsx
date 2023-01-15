import styled from "styled-components"
import LoggedInLayout from "../LoggedInLayout/Layout"
import PageHeading from "../../components/PageHeading/PageHeading"

const Resources = () => {
  return (
    <ResourcesContainer>
        <LoggedInLayout>
            <PageHeading heading={"Resources"}/>
        </LoggedInLayout>
    </ResourcesContainer>
  )
}

export default Resources

const ResourcesContainer = styled.div`
    
`