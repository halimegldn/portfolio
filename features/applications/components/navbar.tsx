import Link from "next/link";
import Image from "next/image"
import { Code, Contact, Download, Github, Linkedin, Mail, Rocket, Send, User } from "lucide-react";

export function Navbar() {

    const navbarLinks = [
        { id: "1", href: "/", icon: User, iconClass: "w-5 h-5 group-hover:scale-110 transition-transform duration-300", title: "Home" },
        { id: "2", href: "#projects", icon: Code, iconClass: "w-5 h-5 group-hover:scale-110 transition-transform duration-300", title: "Projects" },
        { id: "3", href: "#iletisim", icon: Send, iconClass: "w-5 h-5 group-hover:scale-110 transition-transform duration-300", title: "Contact" },

    ]

    return (
        <div className="flex h-[500px] py-6 text-white relative overflow-hidden">
            <div className="w-1/6 flex flex-col m-auto items-center py-12 bg-transparent backdrop-blur-sm relative z-10">
                <nav className="flex flex-col gap-6 text-base">
                    {
                        navbarLinks.map((l) => (
                            <Link href={l.href} key={l.id}
                                className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 focus:bg-white/5 hover:text-white transition-all duration-200 relative"
                            >
                                <l.icon className={l.iconClass} />
                                <span className="font-medium">{l.title}</span>
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-[#00ADB5] group-hover:h-8 transition-all duration-200 rounded-r"></div>
                            </Link>
                        ))
                    }
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                </div>
            </div>
            <div className="w-5/6 flex items-center justify-center p-16 relative z-10">
                <div className="flex gap-20 items-center max-w-6xl">
                    <div className="w-1/2 relative group">
                        <div className="relative">
                            <div className=" overflow-hidden aspect-square w-1/2 h-1/2 mx-auto">
                                <Image
                                    src="/resim.jpg"
                                    width={500}
                                    height={500}
                                    alt="Profil Resmi"
                                    className="object-cover w-full h-full shadow-2xl border-2 border-white/10 group-hover:scale-105 transition-transform duration-500 bg-white"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl font-bold leading-tight">
                                I'm{" "}
                                <span className="text-white 400 bg-clip-text">
                                    Halime GİLDAN
                                </span>
                            </h1>
                            <div className="text-2xl text-gray-300 font-light">Frontend Developer</div>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300 max-w-lg">
                            I develop modern and user-friendly web applications. I focus on performance,
                            design, and user experience to create creative and effective solutions. While developing applications,
                            I mainly work with technologies like Next.js, React, Tailwind CSS, and Shadcn.
                        </p>
                        <div className="flex gap-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">10+</div>
                                <div className="text-sm text-white">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">1+</div>
                                <div className="text-sm text-white">Experience Year</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">100%</div>
                                <div className="text-sm text-white">Satisfaction</div>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-2">
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}