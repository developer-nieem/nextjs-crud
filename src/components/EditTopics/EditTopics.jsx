import React from 'react';
import EditTopicForm from '../EditTopicForm';

const EditTopics = async({id}) => {
    
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics/${id}`)
const data = await res.json();

    return (
        <div>
                        <EditTopicForm id={id}  data={data}></EditTopicForm>
        </div>
    );
};

export default EditTopics;