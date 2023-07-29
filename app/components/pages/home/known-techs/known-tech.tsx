<<<<<<< HEAD
import { ReactNode } from 'react'
=======
import { ReactNode } from "react"
>>>>>>> 51d131072452e7ca3e0b61c71b68ce7c51aba110

type KnownTechProps = {
  tech: {
    icon: ReactNode
    name: string
    startDate: string
  }
}

<<<<<<< HEAD
export const KnownTech = ({ tech }: KnownTechProps) => {
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
=======
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
>>>>>>> 51d131072452e7ca3e0b61c71b68ce7c51aba110
