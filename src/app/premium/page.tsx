import { getSession } from '@/actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const PremiumPage = async () => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect("/")
  }

  if (!session.isPro) {
    return (
      <div className="notPremium">
        <h1>Only members with huge dicks can see the content</h1>
        <Link href="/profile">Go to the profile page to upgrade to premium</Link>
      </div>
    )
  }

  return (
    <div className='premium'>
      <h1>Welcome to the PremiumPage, booooy!</h1>
      <img width={700} height={800} src="https://yomorio.com/cdn/shop/files/yomorio-sexy-school-girl-skirt-set-anime-school-uniform-black-schoolgirl-jk-cosplay-costume.jpg" alt="/" />
    </div>
  );
};

export default PremiumPage;