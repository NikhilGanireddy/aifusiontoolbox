"use client"

import * as z from "zod"
import Heading from "@/components/Heading";
// @ts-ignore
import {UilMusic} from "@iconscout/react-unicons";

import {useForm} from "react-hook-form";
import {formSchema} from "@/app/(dashboard)/conversation/constants";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useState} from "react";
import axios from "axios";
import {Empty} from "@/components/Empty";
import {Loader} from "@/components/Loader";


const MusicPage = () => {
    const [music, setMusic] = useState<string>()

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), defaultValues: {
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setMusic(undefined)
            const response = await axios.post("/api/music", values)
            console.log(response.data.audio)

            setMusic(response.data.audio)

            form.reset()
        } catch (e) {
            console.log(e)
        } finally {
            router.refresh()
        }
    }
    return <div>
        <Heading title={"Music Generation"} description={"Turn your prompt to music."} icon={UilMusic}
                 iconColor={"text-indigo-700"} bgColor={"bg-indigo-700/10"}/>
        <div className={`px-4 lg:px-8`}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                      className={` rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2`}>
                    <FormField name={"prompt"} render={({field}) => (<FormItem className={`col-span-12 lg:col-span-10`}>
                        <FormControl className={`m-0 p-0`}>
                            <Input
                                className={`border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent`}
                                disabled={isLoading} placeholder={"Piano solo"} {...field}/>
                        </FormControl>
                    </FormItem>)}/>
                    <Button className={`bg-indigo-700 col-span-12 lg:col-span-2 w-full`} disabled={isLoading}>Generate</Button>
                </form>
            </Form>
            <div className={`space-y-4 mt-4`}>
                {isLoading && <div className={` p-8 rounded-lg w-full flex items-center justify-center bg-muted`}>
                    <Loader/>
                </div>}
                {!music && !isLoading && <Empty label={"No Music generated."}/>}
                <div className={`flex flex-col-reverse gap-y-4`}>
                    {/*{music.map((message) => <div key={message.content}*/}
                    {/*                             className={cn("p-8 rounded-lg w-full flex items-start gap-x-8", message.role === "user" ? "bg-white border border-black/10" : "bg-muted")}>*/}
                    {/*    {message.role === "user" ? <UserAvatar/> : <BotAvatar/>}*/}
                    {/*    <p className={`text-sm `}>*/}
                    {/*        {message.content}*/}
                    {/*    </p>*/}
                    {/*</div>)}*/}
                </div>
            </div>
        </div>

    </div>
}

export default MusicPage
