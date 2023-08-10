
const SuperSection = ({ title }) => {
    return (
        <section className="w-full items-center ">
            <div className="flex items-center justify-center bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A]  h-[300px]">
                <div className="">
                    <h1 className="text-3xl font-bold mb-2">{title}</h1>
                </div>
            </div>
        </section>
    )
}

export default SuperSection