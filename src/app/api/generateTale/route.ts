import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
})

export async function POST (request:Request) {

    const body : {
        story:string,
        age:string,
        type:string
    } = await request.json();

    const { story, age, type } = body;

    const prompt:string = `This is a ${type} story for ${age} year old child about ${story}.`;	

    console.log("GENERATING")

    const completion = await openai.chat.completions.create({
        messages:[
            {
                role: "system",
                content: "You are a tale maker for children. Make the best tale possible that is funny, captivating and educational"
            },
            {
                role:"user", content: prompt
            }
        ],
        model: "gpt-3.5-turbo"
    })

    const text = completion.choices[0].message.content;

    console.log(text);

    return NextResponse.json(text);

}