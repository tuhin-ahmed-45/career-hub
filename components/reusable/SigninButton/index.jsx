"use client"

import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '..'

const SigninButton = () => {
    const { data: session } = useSession()

    if (session && session.user) {
        return (
            <div className='flex gap-4 ml-auto items-center'>
                <p className='text-sky-600'>{session.user.name}</p>

                <Link onClick={() => signOut()} className="inline-block py-3 px-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white rounded-md" href="/sign-in">Sign Out</Link>
                <Button className="sm:hidden" title={"Start Applying"} />
            </div>
        )
    }
    return (
        <div className='flex items-center gap-5'>
            <button onClick={() => signIn()} className="inline-block py-3 px-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white rounded-md" href="/sign-in">Sign in</button>
            <Button className="sm:hidden" title={"Start Applying"} />
            
        </div>
    )
}

export default SigninButton