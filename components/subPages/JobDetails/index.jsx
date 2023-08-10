import SuperSection from "@/components/reusable/HeroSection"
import LeftSide from "./sections/LeftSide"
import RightSide from "./sections/RightSide"

export const JobDetails = ({job}) => {
  return (
    <>
      <SuperSection title={"Job Details"} />
      <section className="p-10 mt-10 grid md:grid-cols-12 sm:grid-cols-1 gap-3">
        <LeftSide />
        <RightSide job={job}/>
      </section>
    </>
  )
}
