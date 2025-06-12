import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {

    const appLinks = [
        { id: "1", href: "/", icon: Github, iconClass: "w-5 h-5 group-hover:text-[#00ADB5] transition-colors duration-300" },
        { id: "2", href: "/", icon: Linkedin, iconClass: "w-5 h-5 group-hover:text-[#00ADB5] transition-colors duration-300" },
        { id: "3", href: "/", icon: Mail, iconClass: "w-5 h-5 group-hover:text-[#00ADB5] transition-colors duration-300" },

    ]

    return (
        <div id="iletisim" className="relative w-full bg-gradient-to-br from-[#1a1d23] via-[#222831] to-[#2d3748] py-10">
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ADB5] to-transparent"></div>

            <div className="relative mt-5 max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">

                <div className="flex gap-6">
                    {appLinks.map((app) => (
                        <Link
                            href={app.href} key={app.id}
                            className="p-4 rounded-full bg-white/50 hover:bg-[#00ADB5]/30 hover:scale-110 transition-all duration-300 group shadow-md"
                        >
                            <app.icon className={app.iconClass} />
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}
