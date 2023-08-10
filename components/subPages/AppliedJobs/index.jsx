import SuperSection from "@/components/reusable/HeroSection"
import JobCard from "@/components/reusable/JobCard"

const AppliedJobs = ({jobs}) => {
  return (
    <div>
        <SuperSection title={"Applied Job"}/>

        <section className="grid gap-10 p-10">
            {jobs?.map((job) => (
                <JobCard
                    key={job._id}
                    _id={job._id}
                    jobTitle={job.jobTitle}
                    jobType={job.jobType}
                    companyImage={job.companyImage}
                    salary={job.salary}
                    locations={job.locations}
                    workOption={job.workOption}
                />
            ))}
        </section>
    </div>
  )
}

export default AppliedJobs