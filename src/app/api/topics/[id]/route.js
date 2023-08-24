import Topic from "@/models/topic";
import connectMongodb from "@/utiliti/mongodb";
import { NextResponse } from "next/server";

export const PUT =  async(request, {params})=>{
        const {id} = params;
        const {newTitle: title, newDescription : description} = await request.json();
        await connectMongodb();
        await Topic.findByIdAndUpdate(id, {title, description});
        return NextResponse.json({message:"topic update"}, {status:200})
}


// single data by id 

 export async function GET(request, { params }) {
    const { id } = params;
    await connectMongodb();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
  }


//   const GET =  async(request, {params}) =>{
//     const { id } = params;
//     await connectMongodb();
//     const topic = await Topic.findOne({ _id: id });
//     return NextResponse.json({ topic }, { status: 200 });
//   }