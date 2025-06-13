import { prisma } from "@/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";

export async function GetMyApps() {
    noStore();

    try {
        const myApps = await prisma.uygulamalar.findMany({
            orderBy: {
                updatedAt: "desc",
            }
        })
        return myApps;

    } catch (error) {
        console.log(error);
        throw new Error("Gösterimde hata oldu.");
    }
}