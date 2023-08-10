import { BsCalculator } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'
import { MdMemory } from 'react-icons/md'
import { TbSocial } from 'react-icons/tb'
const JobCategory = () => {
    return (
        <section className='max-w-[1200px] mx-auto py-20 items-center flex flex-col justify-center gap-5'>
            <h1 className='text-3xl font-bold'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-4 gap-6'>
                <div className='bg-gradient-to-r from-[#7E90FE0D]/5 to-[#9873FF0D]/5 w-[300px] h-[235px]'>
                    <div className='p-5 flex flex-col space-y-2'>
                        <div className='flex items-center justify-center bg-gradient-to-r from-[#7E90FE0D]/10 to-[#9873FF0D]/10 w-16 h-16 rounded'><BsCalculator className='w-10 h-10 text-purple-500' /></div>
                        <h4 className='text-xl font-bold py-5'>Account & Finance</h4>
                        <p className='text-[#A3A3A3]'>300 Jobs Available</p>
                    </div>
                </div>

                <div className='bg-gradient-to-r from-[#7E90FE0D]/5 to-[#9873FF0D]/5 w-[300px] h-[235px]'>
                    <div className='p-5 flex flex-col space-y-2'>
                        <div className='flex items-center justify-center bg-gradient-to-r from-[#7E90FE0D]/10 to-[#9873FF0D]/10 w-16 h-16 rounded'><FaRegLightbulb className='w-10 h-10 text-purple-500' /></div>
                        <h4 className='text-xl font-bold py-5'>Creative Design</h4>
                        <p className='text-[#A3A3A3]'>100+ Jobs Available</p>
                    </div>
                </div>

                <div className='bg-gradient-to-r from-[#7E90FE0D]/5 to-[#9873FF0D]/5 w-[300px] h-[235px]'>
                    <div className='p-5 flex flex-col space-y-2'>
                        <div className='flex items-center justify-center bg-gradient-to-r from-[#7E90FE0D]/10 to-[#9873FF0D]/10 w-16 h-16 rounded'><TbSocial className='w-10 h-10 text-purple-500' /></div>
                        <h4 className='text-xl font-bold py-5'>Marketing & Sales</h4>
                        <p className='text-[#A3A3A3]'>150 Jobs Available</p>
                    </div>
                </div>

                <div className='bg-gradient-to-r from-[#7E90FE0D]/5 to-[#9873FF0D]/5 w-[300px] h-[235px]'>
                    <div className='p-5 flex flex-col space-y-2'>
                        <div className='flex items-center justify-center bg-gradient-to-r from-[#7E90FE0D]/10 to-[#9873FF0D]/10 w-16 h-16 rounded'><MdMemory className='w-10 h-10 text-purple-500' /></div>
                        <h4 className='text-xl font-bold py-5'>Engineering Job</h4>
                        <p className='text-[#A3A3A3]'>224 Jobs Available</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobCategory