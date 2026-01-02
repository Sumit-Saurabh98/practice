import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../pages/home-page"
import ContactPage from "../pages/contact-page"
import AboutPage from "../pages/about-page"

const Navigation = () => {
  return (
    <Routes>
        <Route path={"/home"} element={<HomePage/>}/>
        <Route path={"/contact"} element={<ContactPage/>}/>
        <Route path={"/about"} element={<AboutPage/>}/>
    </Routes>
  )
}
export default Navigation