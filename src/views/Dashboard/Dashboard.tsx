import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import { DashboardViewContainer } from "./Dashboard.styled"

const Dashboard = () => {
  return (
    <DashboardViewContainer>
      <Navbar/>
      <Sidebar/>
      <h1>Dashboard</h1>
    </DashboardViewContainer>
  )
}

export default Dashboard