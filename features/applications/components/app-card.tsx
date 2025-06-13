import { Uygulamalar } from "@/lib/generated/prisma";
import Image from "next/image";

export function AppCard({ myApps }: { myApps: Uygulamalar[] }) {

    const cards = [
        {
            id: "1",
            title: "The card title is here.",
            image: "/resim.jpg",
            Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit"
        },
        {
            id: "2",
            title: "The card title is here.",
            image: "/resim.jpg",
            Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit"
        },
        {
            id: "3",
            title: "The card title is here.",
            image: "/resim.jpg",
            Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit"
        },
        {
            id: "4",
            title: "The card title is here.",
            image: "/resim.jpg",
            Description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit"
        },
    ]
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">


            {
                myApps.map((app) => (
                    <div
                        className="group relative h-[500px] w-10/12 flex-1 overflow-hidden rounded-2xl bg-rose-300 transition-all hover:grow-[1.25] hover:w-11/12"
                        key={app.id}
                    >
                        <Image
                            src={app.filePath}
                            alt={app.name}
                            width={1000}
                            height={1000}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 from-30% p-4">
                            <div className="w-10/12 text-start flex flex-col">
                                <h2 className="text-2xl font-medium leading-tight text-white">
                                    {app.name}
                                </h2>
                                <div className="grid grid-rows-[0fr] transition-all  group-hover:grid-rows-[1fr]">
                                    <p className="mt-2 overflow-hidden text-white/70 opacity-0 transition duration-300 group-hover:opacity-100">
                                        {app.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {/* <div
                className="group relative h-[500px] w-full flex-1 overflow-hidden rounded-2xl bg-rose-300 transition-all hover:grow-[1.25]"
            >
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/resim.jpg"
                    alt=""
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 from-30% p-4">
                    <div className="w-48">
                        <h2 className="text-2xl font-medium leading-tight text-white">
                            The card title is here.
                        </h2>
                        <div className="grid grid-rows-[0fr] transition-all  group-hover:grid-rows-[1fr]">
                            <p className="mt-2 overflow-hidden text-white/70 opacity-0 transition duration-300 group-hover:opacity-100">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Minima quia ipsa eius.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}