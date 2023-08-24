"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";


const EditTopicForm = ({id, data }) => {
  const [newTitle, setTitle] = useState(data?.topic?.title);
  const [newDescription, setDescription] = useState(data.topic.description);

  const router = useRouter()
  const updateHandler = async(e) => {
    e.preventDefault();

    const res =  await fetch(`http://localhost:3000/api/topics/${id}` , {
        method:"PUT",
        headers:{
            "Content-type" : "application/json"
        },

        body: JSON.stringify({newTitle , newDescription}),
    })

    if (res.ok) {
        router.refresh();
        router.push("/");
    }

  };
  return (
    <div>
      <form onSubmit={updateHandler} className="flex flex-col my-5 space-y-3">
        <input onChange={(e)=> setTitle(e.target.value)}
          value={newTitle}
          className="p-2 border border-slate-600 "
          type="text"
         
          name="titles"
        />
        <textarea onChange={(e)=> setDescription(e.target.value)}
          value={newDescription}
          cols="6"
          rows="6"
          className="p-2 border border-slate-600 "
          type="text"
         
          name="title"
        />

        <button className="bg-stone-600 text-white  p-2 w-fit">
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
