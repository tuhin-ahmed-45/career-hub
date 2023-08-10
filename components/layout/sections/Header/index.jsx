import { SigninButton } from "@/components/reusable"
import Image from "next/image"
import Link from "next/link"

const Header = ({props}) => {
  return (
    <header className=" bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-10">
        <div><Image src="/img/CareerHub.png" alt="Career" width={172} height={44} />
        </div>
        <div className="hidden md:flex items-center gap-10">
          <Link href="#">Statistics</Link>
          <Link href="#">Applied Jobs</Link>
          <Link href="#">Blog</Link>
        </div>
        <div className="md:block hidden space-x-3">

          <SigninButton/>
        </div>
      </div>
    </header>
  )
}

export default Header