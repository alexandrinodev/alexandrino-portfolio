import { Link } from '@/app/components/Link'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () => {
    return (
        <div className='flex gap-6 lg:gap-12 flex-col lg:flex-row'>
            <div className='w-full h-full'>
                <Image
                    width={420}
                    height={304}
                    src="/projeto.webp"
                    alt="Thumbnail do Projeto"
                    className='w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg'
                />
            </div>

            <div>
                <h3 className='flex items-center gap-3 font-medium text-lg text-gray-50'>
                    <Image 
                        width={20}
                        height={20}
                        alt=''
                        src="/images/icons/project-title-icon.svg"
                    />
                    Projeto TOP
                </h3>

                <p className='text-gray-400 my-6'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa provident quas magnam expedita, autem recusandae vero voluptatum molestias error porro quae voluptas delectus odit fuga omnis culpa. Atque, sunt labore.
                </p>

                <div className='flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px] '>
                    <TechBadge name="Next.js" className='hover:scale-110 transition-all'/>
                    <TechBadge name="Next.js" className='hover:scale-110 transition-all'/>
                    <TechBadge name="Next.js" className='hover:scale-110 transition-all'/>
                    <TechBadge name="Next.js" className='hover:scale-110 transition-all'/>
                    <TechBadge name="Next.js" className='hover:scale-110 transition-all'/>
                    <TechBadge name="Next.js" className='hover:scale-110 transition-all'/>
                    <TechBadge name="Next.js" className='hover:scale-110 transition-all'/> 
                </div>

                <Link href="/projects/book-wise">
                    Ver Projeto
                    <HiArrowNarrowRight />
                </Link>

            </div>
        </div>
    )
}
