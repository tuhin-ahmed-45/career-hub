import { Button } from "@/components/reusable"

const RightSide = ({job}) => {
    return (
        <div className="col-span-4">
            <div className="rounded-md w-[400px] h-[420px] bg-gradient-to-r from-[#7E90FE1A]/10 to-[#9873FF1A]/10 px-10 py-14 flex space-y-6 flex-col" >
                <div className="felx flex-col space-y-2">
                    <h4 className="text-xl font-bold">Job Details</h4>
                    <hr />
                    <p><span className="text-md font-bold">Salary :</span>{job.salary}</p>
                    <p><span className="text-md font-bold">Job Title :</span> Product Designer</p>
                </div>
                <div className="felx flex-col space-y-2">
                    <h4 className="text-xl font-bold">Contact Information</h4>
                    <hr />
                    <p><span className="text-md font-bold">Phone :</span> 01750-00 00 00</p>
                    <p><span className="text-md font-bold">Email :</span> info@gmail.com</p>
                    <p><span className="text-md font-bold">Address :</span> Dhanmondi 32, Sukrabad
                        Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="mt-10 ml-36">
                <Button title={"See More"} />
            </div>

        </div>
    )
}

export default RightSide