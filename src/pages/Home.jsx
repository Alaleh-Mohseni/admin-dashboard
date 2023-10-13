import ResponsiveNavbar from "../components/Navbar"
import Footer from "../components/Footer"
import CardItems from "../components/CardItems"
import HeroSection from "../components/HeroSection"

function Home() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <ResponsiveNavbar />
            <HeroSection />
            <CardItems />
            <Footer />
        </div>
    )
}

export default Home