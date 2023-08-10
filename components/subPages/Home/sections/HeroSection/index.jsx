import { Button } from "@/components/reusable"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className=" bg-gradient-to-r from-[#7E90FE0D]/5 to-[#9873FF0D]/5">
      <div className="py-10 items-center px-10 bg-gradient-to-r from-[#7E90FE0D]/5 to-[#9873FF0D]/5">
        <div className="mx-auto grid gap-4 md:grid-cols-2">
          <div className="order-2 flex items-center justify-center">
            <div className="flex flex-col  gap-6 space-x-4">
              <h1 className="md:text-6xl leading-tight font-bold">One Step <br /> Closer To Your <br /> <span className="text-[#9873FF]">Dream Job</span></h1>
              <p className="md:text-md text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
              <div>

                <Button title={"Get Started"} />
              </div>
            </div>
          </div>
          <div className="order-1">
            <Image src="/img/P3OLGJ1.png" width={816} height={744} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection