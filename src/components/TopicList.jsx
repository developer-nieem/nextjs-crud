import React from 'react';
import RemovedTopic from './RemovedTopic';
import Link from 'next/link';
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi';

const getTopics = async() =>{

    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: 'no-store'
        });

        if (!res.ok) {
                throw new Error("Failed to fetch topics")
        }

        return res.json()
    } catch (error) {
        console.log("Error to loading", error);
    }
    
}


const TopicList = async() => {

    const {topics} = await getTopics();

    return (
        <>
        
        {topics.map(item => <div key={item._id}  className='p-2 border my-5 flex justify-between'>
            
            
            <div>
                <h2 className='text-2xl font-semibold'>{item.title}</h2>
                <p>{item.description}  </p>
            </div>
            <div className='flex items-start gap-4'>
                <Link href={`/editTopic/${item._id}`}> <HiPencilAlt></HiPencilAlt> </Link>
                <RemovedTopic></RemovedTopic>
            </div>
        </div>  )}
        
        </>
         
           
        
       
    );
};

export default TopicList;