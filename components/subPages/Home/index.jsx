import HeroSection from './sections/HeroSection'
import JobCategory from './sections/JobCategory'
import FeaturedJob from './sections/JobFeatured'

const Home = ({jobs}) => {
    return (
        <>
            <HeroSection />
            <JobCategory />
            <FeaturedJob jobs={jobs}/>
        </>
    )
}

export default Home