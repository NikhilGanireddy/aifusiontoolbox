"use client"

import * as z from "zod"
import Heading from "@/components/Heading";
import {Download} from "lucide-react";
// @ts-ignore
import {UilImageV} from "@iconscout/react-unicons";

import {useForm} from "react-hook-form";
import {amountOptions, formSchema, resolutionOptions} from "@/app/(dashboard)/image/constants";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useState} from "react";
import axios from "axios";
import {Empty} from "@/components/Empty";
import {Loader} from "@/components/Loader";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Card, CardFooter} from "@/components/ui/card";
import Image from "next/image";

const ImagePage = () => {
    const router = useRouter()
    const [images, setImages] = useState<string[]>([])
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), defaultValues: {
            prompt: "", amount: "1", resolution: "512x512",
        }
    })

    const isLoading = form.formState.isSubmitting
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setImages([])
            console.log(values)
            const response = await axios.post("/api/image", values)
            const urls = response.data.map((image: { url: string }) => image.url)
            setImages(urls)
            console.log(response.data)
            form.reset()
        } catch (e) {
            console.log(e)
        } finally {
            router.refresh()
        }
    }
    return <div>
        <Heading title={"Image Generation"} description={"Turn your prompt to image."} icon={UilImageV}
                 iconColor={"text-indigo-700"} bgColor={"bg-indigo-700/10"}/>
        <div className={`px-4 lg:px-8 pb-4`}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                      className={` rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2`}>
                    <FormField name={"prompt"} render={({field}) => (<FormItem className={`col-span-12 lg:col-span-6`}>
                        <FormControl className={`m-0 p-0`}>
                            <Input
                                className={`border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent`}
                                disabled={isLoading} placeholder={"A picture of tiger eating"} {...field}/>
                        </FormControl>
                    </FormItem>)}/>
                    <FormField render={({field}) => (<FormItem className={`col-span-12 lg:col-span-2`}>
                        <Select disabled={isLoading} onValueChange={field.onChange} value={field.value}
                                defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue defaultValue={field.value}/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {amountOptions.map((option) => <SelectItem value={option.value}
                                                                           key={option.value}>{option.label}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </FormItem>)}
                               name={"amount"} control={form.control}/>
                    <FormField render={({field}) => (<FormItem className={`col-span-12 lg:col-span-2`}>
                        <Select disabled={isLoading} onValueChange={field.onChange} value={field.value}
                                defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue defaultValue={field.value}/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {resolutionOptions.map((option) => <SelectItem value={option.value}
                                                                               key={option.value}>{option.label}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </FormItem>)}
                               name={"resolution"} control={form.control}/>
                    <Button className={`bg-indigo-700 col-span-12 lg:col-span-2 w-full`} disabled={isLoading}>Generate</Button>
                </form>
            </Form>
            <div className={`space-y-4 mt-4`}>
                {isLoading && <div className={` p-20`}>
                    <Loader/>
                </div>}
                {images.length === 0 && !isLoading && <Empty label={"No Images generated."}/>}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8`}>
                    {images.map((image) => <Card key={image} className={` rounded-lg overflow-hidden`}>
                        <div className={`relative aspect-square`}>
                            <Image src={image} alt={"image"} fill={true}/>
                        </div>
                        <CardFooter className={`p-2 `}>
                            <Button variant={"secondary"} className={`w-full`} onClick={() => window.open(image)}>
                                <Download className={`mr-2 w-4 h-4`}/>Download
                            </Button>
                        </CardFooter>
                    </Card>)}
                </div>
            </div>
        </div>

    </div>
}

export default ImagePage


// I can do a variety of tasks depending on your needs. I can answer questions, provide information, assist with calculations, help with language translation, offer suggestions, and engage in conversations on different topics. Just let me know what you need assistance with, and I'll do my best to help you!
