import Link from 'next/link';
import React from 'react';
import LogoutForm from './LogoutForm';
import { getSession } from '../actions';

const Navbar = async () => {
    const session = await getSession()
    
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/premium">Premium</Link>
            <Link href="/login">Login</Link>
            {session.isLoggedIn && <LogoutForm />}
        </nav>
    );
};

export default Navbar;