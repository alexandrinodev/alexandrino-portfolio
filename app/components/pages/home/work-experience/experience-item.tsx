import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
    return(
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image 
                        src="https://scontent.fpll2-1.fna.fbcdn.net/v/t39.30808-6/305996147_492899776181867_5101982219133368371_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sDeAi2D7D7wAX8zVV9y&_nc_zt=23&_nc_ht=scontent.fpll2-1.fna&oh=00_AfDR6I3dK-IxjR3fs2mpjE2YgbHZ9-b46nf3dbRrbQIshw&oe=64D71BA3"
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Logo da empresa SIDIA"
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800">

                </div>
            </div>

            <div>
                <div className="felx flex-col gap-2 text-sm sm:text-base">
                    <a 
                        href="https://www.linkedin.com/company/sidiaoficial/mycompany/"
                        target="_black"
                        className="text-gray-500 hover:text-emerald-500 transition-colors"
                    >
                        @ Sidia
                    </a>
                    <h4 className="text-gray-300">Desenvolvedor de teste II</h4>        
                    <span className="text-gray-500">
                        Apr 2022 º O momento º (6 meses)
                    </span>            
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ipsam voluptatem veritatis voluptatibus cum harum dolorum unde aliquid, optio placeat.</p>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-samibold">Competências</p>
                <div className="flex gap-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                </div>
            </div>
        </div>
    )
}