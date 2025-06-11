export function AppCard() {
    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

            <div
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
            </div>
            <div
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
            </div>
        </div>
    )
}