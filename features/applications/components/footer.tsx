import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {

    const appLinks = [
        { id: "1", href: "/", icon: Github, iconClass: "w-5 h-5 transition-colors duration-300 text-white" },
        { id: "2", href: "/", icon: Linkedin, iconClass: "w-5 h-5 transition-colors duration-300 text-white" },
        { id: "3", href: "/", icon: Mail, iconClass: "w-5 h-5 transition-colors duration-300 text-white" },

    ]

    return (
        <div id="iletisim" className=" w-full py-10">
            <div className="relative mt-5 max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">

                <div className="flex gap-6">
                    {appLinks.map((app) => (
                        <Link
                            href={app.href} key={app.id}
                            className="p-4 rounded-full bg-white/5 transparnet hover:scale-110 transition-all duration-300 group shadow-md"
                        >
                            <app.icon className={app.iconClass} />
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}
