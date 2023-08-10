import Link from "next/link"
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className="w-[1519px] hidden gap-4 py-16 px-5 space-x-2 bg-black text-white  h-[450px] xl:grid grid-cols-5">
      <div>
        <h2 className="text-2xl font-bold">CareerHub</h2>
        <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
        <div className="flex space-x-3 mt-5">
          <div className=" rounded-full"><BiLogoFacebook className="text-blue-700 w-8 h-8"/></div>
          <div className=" rounded-full"><AiOutlineTwitter className="text-blue-700 w-8 h-8"/></div>
          <div className=" rounded-full"><AiOutlineInstagram className="text-pink-600 w-8 h-8"/></div>
        </div>
      </div>
      <div className="space-y-4 flex flex-col">
        <h3>Company</h3>
        <Link href="#">About</Link>
        <Link href="#">Work</Link>
        <Link href="#">Latest News</Link>
        <Link href="#">Careers</Link>
      </div>
      <div className="space-y-4 flex flex-col">
        <h3>Company</h3>
        <Link href="#">About</Link>
        <Link href="#">Work</Link>
        <Link href="#">Latest News</Link>
        <Link href="#">Careers</Link>
      </div>
      <div className="space-y-4 flex flex-col">
        <h3>Company</h3>
        <Link href="#">About</Link>
        <Link href="#">Work</Link>
        <Link href="#">Latest News</Link>
        <Link href="#">Careers</Link>
      </div>
      <div className="space-y-4 flex flex-col">
        <h3>Company</h3>
        <Link href="#">About</Link>
        <Link href="#">Work</Link>
        <Link href="#">Latest News</Link>
        <Link href="#">Careers</Link>
      </div>
    </footer>
  )
}

export default Footer