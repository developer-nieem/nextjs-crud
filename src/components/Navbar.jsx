import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-slate-900 text-white p-5 flex justify-between items-center'>
            <Link className='text-xl font-semibold' href='/'> NM's Coder </Link>
            <Link className='bg-white p-2 text-black' href='/addTopic'> Add a Topic </Link>
        </nav>
    );
};

export default Navbar;