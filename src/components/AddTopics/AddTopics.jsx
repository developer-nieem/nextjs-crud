'use client'
import React, {  useState } from 'react';
import { useRouter } from 'next/navigation';

const AddTopics = () => {


    const [title, setTitle] =  useState('');
    const [description, setDescription] =  useState('');
    const router =  useRouter()
    const submitHandler = async(e) => {
        e.preventDefault();

        try {
       const res =   await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            
            body:JSON.stringify({title, description})
          })

          if (res.ok) {
            router.refresh()
            router.push('/')
          }
        } catch (error) {
            
        }
    }
   

    return (
        <div>
             <form onSubmit={submitHandler} className='flex flex-col my-5 space-y-3'>
                <input onChange={(e)=> setTitle(e.target.value)} className='p-2 border border-slate-600 ' type="text" placeholder='Title' name='title' required />
                <textarea onChange={(e)=> setDescription(e.target.value)} cols='6' rows='6' className='p-2 border border-slate-600 ' type="text" placeholder='Discription' name='title'  required/>

                <button className='bg-stone-600 text-white  p-2 w-fit'>Added Topic</button>
            </form>
        </div>
    );
};

export default AddTopics;