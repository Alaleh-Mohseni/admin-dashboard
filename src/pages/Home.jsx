import Navigation from "@components/Navigation"
import Footer from "@components/Footer"
import CardItems from "@components/CardItems"
import Hero from "@components/Hero"

function Home() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navigation />
            <Hero />
            <CardItems />
            <Footer />
        </div>
    )
}

export default Home