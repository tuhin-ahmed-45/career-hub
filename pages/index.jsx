import Layout from "@/components/layout";
import Home from "@/components/subPages/Home";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage({jobs}) {
  return (
    <Layout>
      <Home jobs={jobs}/>
    </Layout>
  ); 
}
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