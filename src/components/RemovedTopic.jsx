'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
const RemovedTopic = ({id}) => {

    console.log(id);
    const router =  useRouter();

    const removeTopics = async() =>{
       
        const confirms = confirm('are you sure for remove topic')

        if (confirms) {
           const res = await fetch(`http://localhost:3000/api/topics/?id=${id}` , {
                method:'DELETE'
            })

             if (res) {
                    router.refresh()
                }
        }
    }


    return (
        <div>
            <button onClick={removeTopics}> <HiOutlineTrash></HiOutlineTrash> </button>
        </div>
    );
};

export default RemovedTopic;