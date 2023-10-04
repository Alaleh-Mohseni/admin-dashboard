import ResponsiveNavbar from "../components/Navbar"
import Footer from "../components/Footer"
import CardItems from "../components/CardItems"

function Home() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <ResponsiveNavbar />
            <CardItems />
            <Footer />
        </div>
    )
}

export default Home