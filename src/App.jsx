import Navbar from "./components/Navbar"
import HomeSegment from "./components/HomeSegment"
import AboutSegment from "./components/AboutSegment"
import ProjectsSegment from "./components/ProjectsSegment"
import ContactSegment from "./components/ContactSegment"
import Footer from "./components/Footer"

function App() {
    return (
        <div>
            <Navbar />
            <HomeSegment />
            <AboutSegment />
            <ProjectsSegment />
            <ContactSegment />
            <Footer />
        </div>
    )
}

export default App
