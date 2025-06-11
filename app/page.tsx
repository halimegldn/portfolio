import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Download, Code, User, Rocket } from "lucide-react"
import { AppCard } from "@/features/applications/components/app-card"
import { Navbar } from "@/features/applications/components/navbar"

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Projeler */}
      <section id="projects" className="min-h-screen bg-gradient-to-br from-[#2d3748] via-[#1a1d23] to-[#222831] relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ADB5] to-transparent"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen p-16">
          <div className="w-full mx-auto text-center space-y-12 px-32">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-[#00ADB5] text-sm font-medium tracking-wider uppercase mb-4">
                <div className="w-12 h-px bg-[#00ADB5]"></div>
                <span>Hakkımda</span>
                <div className="w-12 h-px bg-[#00ADB5]"></div>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Benim{" "}
                <span className="bg-gradient-to-r from-[#00ADB5] to-purple-400 bg-clip-text text-transparent">
                  Hikayem
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Teknoloji tutkusu ve yaratıcılığı birleştirerek, dijital dünyada iz bırakacak projeler geliştiriyorum.
              </p>
            </div>
            <AppCard />
          </div>
        </div>
      </section>
    </div>
  )
}
