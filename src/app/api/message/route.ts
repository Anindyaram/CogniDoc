import { db } from "@/db";
// import { getPineconeClient } from "@/lib/pinecone";
import { SendMessageValidator } from "@/lib/validators/SendMessageValidator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export const POST = async(req:NextResponse)=>{
    //endpoint for asking a question to a pdf file

    const body = await req.json()

    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user?.id) return new Response('Unauthorized', {status:401})
    
    const {id:userId} = user

    const {fileId,message} = SendMessageValidator.parse(body)

    const file = await db.file.findFirst({
        where:{
            id:fileId,
            userId,
        },
    })

    if(!file) return new Response('Not Found', {status:404})

    await db.message.create({
        data:{
            text:message,
            isUserMessage:true,
            fileId,
            userId,
        }
    })

    //Applying sementic query to the file
    //Vectorize the message
    // const embeddings = new OPENAI_API_KEY({
    //     openAIApiKey: process.env.OPENAI_API_KEY,
    // })

    // const pinecone = await getPineconeClient()
    // const pineconeIndex = pinecone.Index('anindya-cognidoc');

     

}