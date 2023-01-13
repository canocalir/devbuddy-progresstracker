
import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"

type Props = {
  children: JSX.Element
}

const Layout = ({children}: Props) => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    {children}
    </>
  )
}

export default Layout