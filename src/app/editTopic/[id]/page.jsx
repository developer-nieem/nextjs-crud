
import EditTopicForm from '@/components/EditTopicForm';
import React from 'react';



const EditTopic = async({params}) => {
const id =  params.id;
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics/${id}`)
const data = await res.json();




return (
        <div>
            <EditTopicForm id={id}  data={data}></EditTopicForm>
        </div>
    );
};

export default EditTopic;