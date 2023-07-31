import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"

export const HighLightedProjects = () => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title="Projetos em Destaque"/>
            <HorizontalDivider className="mb-16"/>
        </section>
    )
}