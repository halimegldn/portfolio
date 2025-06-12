import Link from "next/link";
import Image from "next/image"
import { Code, Contact, Download, Github, Linkedin, Mail, Rocket, Send, User } from "lucide-react";

export function Navbar() {

    const navbarLinks = [
        { id: "1", href: "/", icon: User, iconClass: "w-5 h-5 group-hover:scale-110 transition-transform duration-300", title: "Anasayfa" },
        { id: "2", href: "#projects", icon: Code, iconClass: "w-5 h-5 group-hover:scale-110 transition-transform duration-300", title: "Projeler" },
        { id: "3", href: "#iletisim", icon: Send, iconClass: "w-5 h-5 group-hover:scale-110 transition-transform duration-300", title: "İletişim" },

    ]

    return (
        <div className="flex h-[500px] py-6 text-white relative overflow-hidden">
            <div className="w-1/6 flex flex-col m-auto items-center py-12 bg-transparent backdrop-blur-sm relative z-10">
                <nav className="flex flex-col gap-6 text-base">
                    {
                        navbarLinks.map((l) => (
                            <Link href={l.href} key={l.id}
                                className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 hover:text-[#00ADB5] transition-all duration-200 relative"
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
                                Ben{" "}
                                <span className="bg-gradient-to-r from-[#00ADB5] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Halime GİLDAN
                                </span>
                            </h1>
                            <div className="text-2xl text-gray-300 font-light">Frontend Developer</div>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300 max-w-lg">
                            Modern ve kullanıcı dostu web uygulamaları geliştiriyorum. Performans, tasarım ve kullanıcı deneyimini
                            her zaman ön planda tutarak,
                            <span className="text-[#00ADB5] font-medium"> yaratıcı çözümler</span> üretiyorum.
                        </p>
                        <div className="flex gap-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#00ADB5]">10+</div>
                                <div className="text-sm text-gray-400">Projeler</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#00ADB5]">1+</div>
                                <div className="text-sm text-gray-400">Yıl Deneyim</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#00ADB5]">100%</div>
                                <div className="text-sm text-gray-400">Memnuniyet</div>
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