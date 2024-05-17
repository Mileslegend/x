import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async () => {
  const authUSer = await currentUser();
  if(!authUSer) return redirect('/sign-in')

  //get the user details
  
  return (
    <div>Agency Dashboard</div>
  )
}

export default Page