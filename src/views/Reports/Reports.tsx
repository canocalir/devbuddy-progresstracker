import styled from "styled-components"
import LoggedInLayout from "../LoggedInLayout/Layout"
import PageHeading from "../../components/PageHeading/PageHeading"

const Reports = () => {
  return (
    <ReportsContainer>
        <LoggedInLayout>
            <PageHeading heading={"Reports"}/>
        </LoggedInLayout>
    </ReportsContainer>
  )
}

export default Reports


export const ReportsContainer = styled.div`
    

`