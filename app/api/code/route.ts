import {ChatCompletionRequestMessage, Configuration, OpenAIApi} from "openai"
import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. Your purpose to help coding for users. You must answer only in markdown code snippets. Use comment codes for explanations."
}

export async function POST(req: Request) {
    try {
        const {userId} = auth()
        const body = await req.json()
        const {messages} = body

        if (!userId) return new NextResponse("Unauthorised", {status: 401})
        if (!configuration.apiKey) return new NextResponse("OPENAI API key not configured", {status: 500})
        if (!messages) return new NextResponse("Messages are required", {status: 400})

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo", messages: [instructionMessage, ...messages]
        })
        return NextResponse.json(response.data.choices[0].message)
    } catch (e) {
        console.log("[CODE ERROR]", e)
        return new NextResponse("Internal error", {status: 500})
    }
}