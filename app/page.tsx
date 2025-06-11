import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { AppCard } from "@/features/applications/components/app-card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="">
        <Image alt="ben" src="https://particle.scitech.org.au/wp-content/uploads/2022/12/GettyImages-1203853320-scaled.jpg" width={100} height={100} className="rounded-full" />

      </div>


      Merhaba Portfolio
      < AppCard />
    </div >
  );
}
