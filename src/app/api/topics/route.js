import Topic from "@/models/topic";
import connectMongodb from "@/utiliti/mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const {title , description} = await request.json();

    await connectMongodb();
    await Topic.create({title, description});
    return NextResponse.json({message:'Topic created'} , {status: 201});
}

export const GET = async() =>{
    await connectMongodb();
    const topics = await Topic.find();
    return NextResponse.json({topics});
};


export const DELETE = async(request) => {
    const id = request.nextURL.searchParams.get('id');
    await connectMongodb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "topic delete"}, {status:200})
}