import Layout from "@/components/layout"
import AppliedJobs from "@/components/subPages/AppliedJobs"
import { sanityClient } from "@/sanity"
import { groq } from "next-sanity"

const AppliedJobsPage = ({ jobs }) => {

  return (
    <Layout>
      <AppliedJobs jobs={jobs} />
    </Layout>
  )
}

export default AppliedJobsPage

export const getStaticProps = async () => {
  try {
    const query = groq`
      *[_type == "jobs"]
    `;
    
    const jobs = await sanityClient.fetch(query);

    return {
      props: {
        jobs: jobs,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {jobs: []},
    };
  }
};
