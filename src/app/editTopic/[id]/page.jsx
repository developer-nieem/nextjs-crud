import React from 'react';

const EditTopic = () => {
    return (
        <div>
            <form className='flex flex-col my-5 space-y-3'>
                <input className='p-2 border border-slate-600 ' type="text" placeholder='Title' name='title' />
                <textarea cols='6' rows='6' className='p-2 border border-slate-600 ' type="text" placeholder='Discription' name='title' />

                <button className='bg-stone-600 text-white  p-2 w-fit'>Update Topic</button>
            </form>
        </div>
    );
};

export default EditTopic;