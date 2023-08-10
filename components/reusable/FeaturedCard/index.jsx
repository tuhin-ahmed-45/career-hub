import { urlFor } from "@/sanity"
import Image from "next/image"
import { BorderButton, Button } from ".."
const FeaturedCard = ({ jobTitle, companyName, companyImage, salary, address, workOption, jobType, _id}) => {
    return (
        <div className='border w-[520px] h-[320px]'>
            <div className='p-10 space-y-3'>
            <Image src={urlFor(companyImage).url()} width={100} height={35} alt="" />
                <h4 className='font-bold text-xl'>{jobTitle}</h4>
                <p>{companyName}</p>
                <div className='flex items-center space-x-2'>
                    <BorderButton title={workOption} />
                    <BorderButton title={jobType} />
                </div>
                <div className='flex space-x-5'>
                    <p>{address}</p> <p>Salary : {salary}</p>
                </div>
                <Button title={"View Details"} />
            </div>
        </div>
    )
}

export default FeaturedCard