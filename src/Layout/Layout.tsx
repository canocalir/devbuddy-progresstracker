import Navbar from "../components/Navbar/Navbar"

type Props = {
  children: JSX.Element
}

const Layout = ({children}: Props) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default Layout