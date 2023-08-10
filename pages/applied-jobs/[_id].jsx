import Layout from "@/components/layout";
import { JobDetails } from "@/components/subPages/JobDetails";
import { sanityClient } from "@/sanity";

const JobPage = ({ job }) => {
  return (
    <Layout>
      <JobDetails job={job} />
    </Layout>
  );
}

export default JobPage;

export const getStaticPaths = async () => {
  const query = `*[_type == "jobs"]{
    _id,
  }`;
  const jobs = await sanityClient.fetch(query);

  const paths = jobs.map((job) => ({
    params: {
      _id: job?._id
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ params }) => {


  const query = `*[_type == "jobs" && _id == $_id][0]`;

  const job = await sanityClient.fetch(query, {
    _id: params._id || "",
  });

  if (!job) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      job,
    },
    revalidate: 60,
  };
};
