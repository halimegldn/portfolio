import Link from "next/link";
import Image from "next/image"
import { Code, Download, Github, Linkedin, Mail, Rocket, User } from "lucide-react";

export function Navbar() {

    const links = [
        { href: "/", icon: User, iconClass: "w-5 h-5 group-hover:scale-110 transition-transform duration-300", title: "Anasayfa" },
        { href: "#projects", icon: Code, iconClass: "w-5 h-5 group-hover:scale-110 transition-transform duration-300", title: "Projeler" },
    ]

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-[#1a1d23] via-[#222831] to-[#2d3748] text-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ADB5]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
            <div className="w-1/6 flex flex-col items-center py-12 bg-[#1a1d23]/80 backdrop-blur-sm shadow-2xl border-r border-white/10 relative z-10">
                <div className="mb-16 relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#00ADB5] to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                    <div className="relative bg-[#222831] px-6 py-3 rounded-lg border border-white/10">
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#00ADB5] to-white bg-clip-text text-transparent">
                            Portfolio
                        </div>
                    </div>
                </div>
                <nav className="flex flex-col gap-6 text-base">
                    {
                        links.map((l) => (
                            <Link href={l.href} key={l.href}
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

                    <Link
                        href="#"
                        className="p-3 rounded-xl bg-white/5 hover:bg-[#00ADB5]/20 hover:scale-110 transition-all duration-300 group"
                    >
                        <Github className="w-5 h-5 group-hover:text-[#00ADB5] transition-colors duration-300" />
                    </Link>
                    <Link
                        href="#"
                        className="p-3 rounded-xl bg-white/5 hover:bg-[#00ADB5]/20 hover:scale-110 transition-all duration-300 group"
                    >
                        <Linkedin className="w-5 h-5 group-hover:text-[#00ADB5] transition-colors duration-300" />
                    </Link>
                    <Link
                        href="#"
                        className="p-3 rounded-xl bg-white/5 hover:bg-[#00ADB5]/20 hover:scale-110 transition-all duration-300 group"
                    >
                        <Mail className="w-5 h-5 group-hover:text-[#00ADB5] transition-colors duration-300" />
                    </Link>
                </div>
            </div>
            <div className="w-5/6 flex items-center justify-center p-16 relative z-10">
                <div className="flex gap-20 items-center max-w-6xl">
                    <div className="w-1/2 relative group">
                        {/* <div className="absolute -inset-4 bg-gradient-to-r from-[#00ADB5] via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div> */}
                        <div className="relative">
                            <div className="rounded-full overflow-hidden aspect-square w-4/5 h-4/5 mx-auto">
                                <Image
                                    src="/resim.jpg"
                                    width={500}
                                    height={500}
                                    alt="Profil Resmi"
                                    className="object-cover w-full h-full shadow-2xl border-2 border-white/10 group-hover:scale-105 transition-transform duration-500 bg-white"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#00ADB5] to-purple-500 p-4 rounded-2xl shadow-2xl">
                                <Rocket className="w-8 h-8 text-white animate-bounce" />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-[#00ADB5] text-sm font-medium tracking-wider uppercase">
                                <div className="w-8 h-px bg-[#00ADB5]"></div>
                                <span>Merhaba Dünya</span>
                            </div>

                            <h1 className="text-5xl font-bold leading-tight">
                                Ben{" "}
                                <span className="bg-gradient-to-r from-[#00ADB5] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    [Adın]
                                </span>
                            </h1>
                            <div className="text-2xl text-gray-300 font-light">Frontend Developer</div>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300 max-w-lg">
                            Modern ve kullanıcı dostu web uygulamaları geliştiriyorum. Performans, tasarım ve kullanıcı deneyimini
                            her zaman ön planda tutarak,
                            <span className="text-[#00ADB5] font-medium"> yaratıcı çözümler</span> üretiyorum.
                        </p>
                        <div className="flex gap-8 py-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#00ADB5]">50+</div>
                                <div className="text-sm text-gray-400">Projeler</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#00ADB5]">3+</div>
                                <div className="text-sm text-gray-400">Yıl Deneyim</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#00ADB5]">100%</div>
                                <div className="text-sm text-gray-400">Memnuniyet</div>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#00ADB5] to-purple-500 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00ADB5]/25">
                                <span className="relative z-10 flex items-center gap-2">
                                    <Download className="w-5 h-5" />
                                    CV İndir
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>

                            <button className="px-8 py-4 border-2 border-white/20 rounded-xl font-semibold backdrop-blur-sm hover:border-[#00ADB5]/50 hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                                <Mail className="w-5 h-5" />
                                İletişime Geç
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}