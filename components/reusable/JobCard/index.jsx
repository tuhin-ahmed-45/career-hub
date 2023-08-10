import { urlFor } from "@/sanity"
import Image from "next/image"
import Link from "next/link"
import { BorderButton } from ".."


const JobCard = ({ jobTitle, companyName, companyImage, salary, address, workOption, jobType, _id}) => {
    return (
        <div className="flex items-center justify-between px-5 py-2 border border-gray-200">
            <div className="flex gap-8 items-center flex-col md:flex-row">
                <div className="bg-[#F4F4F4] w-48 h-48 flex justify-center items-center rounded">
                    <Image src={urlFor(companyImage).url()} width={80} height={20} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className='font-bold text-xl'>{jobTitle}</h4>
                    <p>{companyName}</p>
                    <div className='flex items-center space-x-2'>
                        <BorderButton title={workOption} />
                        <BorderButton title={jobType} />
                    </div>
                    <div className='flex space-x-5'>
                        <p>{address}</p> <p>Salary : {salary}</p>
                    </div>
                </div>
            </div>

            <div>
                <Link className="inline-block py-3 px-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white rounded-md" href={`/applied-jobs/${_id}`} >Job Detail</Link>
                
            </div>
        </div>
    )
}

export default JobCard