
import EditTopics from '@/components/EditTopics/EditTopics';
import React from 'react';



const Edit_Topic = ({params}) => {

const id =  params.id



return (
        <div>
            <EditTopics id={id}></EditTopics>
        </div>
    );
};

export default Edit_Topic;