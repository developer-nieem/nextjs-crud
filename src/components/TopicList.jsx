import React from 'react';
import RemovedTopic from './RemovedTopic';
import Link from 'next/link';
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi';

const TopicList = () => {
    return (
        <div className='p-2 border my-5 flex justify-between'>
            <div>
                <h2 className='text-2xl font-semibold'>topic title</h2>
                <p>Topic description  </p>
            </div>
            <div className='flex items-start gap-4'>
                <Link href='/editTopic/1254'> <HiPencilAlt></HiPencilAlt> </Link>
                <RemovedTopic></RemovedTopic>
            </div>
        </div>
    );
};

export default TopicList;