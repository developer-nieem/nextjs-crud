import React from 'react';
import RemovedTopic from './RemovedTopic';
import Link from 'next/link';
import { HiOutlineTrash } from 'react-icons/hi';

const TopicList = () => {
    return (
        <div className='p-2 border my-5 flex justify-between'>
            <div>
                <h2 className='text-2xl font-semibold'>topic title</h2>
                <p>Topic description  </p>
            </div>
            <div className='flex items-start gap-4'>
                <RemovedTopic></RemovedTopic>
                <Link href='/editTopic'> <HiOutlineTrash></HiOutlineTrash> </Link>
            </div>
        </div>
    );
};

export default TopicList;