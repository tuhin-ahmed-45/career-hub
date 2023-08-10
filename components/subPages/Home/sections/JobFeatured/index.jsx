import { FeaturedCard } from '@/components/reusable'
import Button from '@/components/reusable/Button'
const FeaturedJob = ({jobs}) => {
    return (
        <section className='max-w-[1200px] mx-auto py-20 items-center flex flex-col justify-center gap-5'>
            <h1 className='text-3xl font-bold'>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-4'>
            {jobs?.map((job) => (
                <FeaturedCard
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
            </div>
            <Button title={"See All Jobs"}/>
        </section>
    )
}

export default FeaturedJob