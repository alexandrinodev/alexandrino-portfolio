import { SectionTitle } from "@/app/components/section-title"
import { TbBrandNextjs } from "react-icons/tb"
import { KnownTech } from "./known-tech"

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title='Cohecimentos'/>
                                            {/*os cards irão ter 264px, menos disse a coluna de cards diminui*/}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {Array.from({length: 8}).map((_, index) => (
                    <KnownTech key={index} tech={{
                        icon:<TbBrandNextjs />,
                        name: 'NextJs',
                        startDate: '2023-05-01'
                    }}/>
                ))}
            </div>
        </section>
    )
}