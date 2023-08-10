import Footer from "./sections/Footer"
import Header from "./sections/Header"

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout