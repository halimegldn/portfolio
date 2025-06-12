import { Footer } from "@/features/applications/components/footer"
import { Navbar } from "@/features/applications/components/navbar"
import { AppCard } from "@/features/applications/components/app-card"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"

export default function Home() {

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <BackgroundGradientAnimation />
      </div>
      {/* Navbar */}
      <Navbar />
      {/* Projeler */}
      <div id="projects" className="min-h-screen relative">
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
      </div>
      <Footer />
    </div>
  )
}
