"use client"

import * as z from "zod"
import Heading from "@/components/Heading";
// @ts-ignore
import {UilCommentAlt} from "@iconscout/react-unicons";

import {useForm} from "react-hook-form";
import {formSchema} from "@/app/(dashboard)/conversation/constants";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {ChatCompletionRequestMessage} from "openai";
import axios from "axios";
import {Empty} from "@/components/Empty";
import {Loader} from "@/components/Loader";
import {cn} from "@/lib/utils";
import UserAvatar from "@/components/UserAvatar";
import {BotAvatar} from "@/components/BotAvatar";


const Conversation = () => {
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), defaultValues: {
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage: ChatCompletionRequestMessage = {
                role: "user", content: values.prompt
            }
            const newMessages = [...messages, userMessage]

            const response = await axios.post("/api/code", {messages: newMessages})
            console.log(response.data)
            setMessages((current) => [...current, userMessage, response.data])

            form.reset()
        } catch (e) {
            console.log(e)
        } finally {
            router.refresh()
        }
    }
    return <div>
        <Heading title={"Conversation"} description={"Our most advanced conversation model."} icon={UilCommentAlt}
                 iconColor={"text-indigo-700"} bgColor={"bg-indigo-700/10"}/>
        <div className={`px-4 lg:px-8 pb-4`}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                      className={` rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2`}>
                    <FormField name={"prompt"} render={({field}) => (<FormItem className={`col-span-12 lg:col-span-10`}>
                        <FormControl className={`m-0 p-0`}>
                            <Input
                                className={`border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent`}
                                disabled={isLoading} placeholder={"Population on Earth?"} {...field}/>
                        </FormControl>
                    </FormItem>)}/>
                    <Button className={`bg-indigo-700 col-span-12 lg:col-span-2 w-full`}
                            disabled={isLoading}>Generate</Button>
                </form>
            </Form>
            <div className={`space-y-4 mt-4`}>
                {isLoading && <div className={` p-8 rounded-lg w-full flex items-center justify-center bg-muted`}>
                    <Loader/>
                </div>}
                {messages.length === 0 && !isLoading && <Empty label={"No Conversation started."}/>}
                <div className={`flex flex-col-reverse gap-y-4`}>
                    {messages.map((message) => <div key={message.content}
                                                    className={cn("p-8 rounded-lg w-full flex items-start gap-x-8", message.role === "user" ? "bg-white border border-black/10" : "bg-muted")}>
                        {message.role === "user" ? <UserAvatar/> : <BotAvatar/>}
                        <p className={`text-sm `}>
                            {message.content}
                        </p>
                    </div>)}
                </div>
            </div>
        </div>
    </div>
}

export default Conversation


// I can do a variety of tasks depending on your needs. I can answer questions, provide information, assist with calculations, help with language translation, offer suggestions, and engage in conversations on different topics. Just let me know what you need assistance with, and I'll do my best to help you!
