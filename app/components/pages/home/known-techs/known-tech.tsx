import { ReactNode } from "react"

type KnownTechProps = {
    tech: {
        icon: ReactNode
        name: string
        startDate: string
    }
}

export const KnownTech = ({tech}: KnownTechProps) => {
    return (
        <div className="p-6 hover:scale-110 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                {tech.icon}
            </div>

            <span>de experiência</span>
        </div>
    )
}