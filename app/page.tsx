import { Footer } from "@/features/applications/components/footer"
import { Navbar } from "@/features/applications/components/navbar"
import { AppCard } from "@/features/applications/components/app-card"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { GetMyApps } from "@/features/applications/data"

export default async function Home() {

  const myApps = await GetMyApps();

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
              <p className="text-2xl text-white max-w-2xl mx-auto leading-relaxed font-bold">
                My Projects
              </p>
            </div>
            <AppCard myApps={myApps} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
