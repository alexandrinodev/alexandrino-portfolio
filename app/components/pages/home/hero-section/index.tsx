/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/alexandrinodev',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://www.linkedin.com/in/alexandrino-alex/',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://wa.me/5592984494933',
        icon: <TbBrandWhatsapp />
    },
]

/* eslint-disable prettier/prettier */
export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end sm:pb-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Ola, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Alex Alexandrino</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">ola, meu nome é Alex eu sou desenvolvedor front-end apaixonado por tecnologia. Meu objetivo é cria interfaces de usuários bonitas e funcionais, além de liderar equipes técnicas em porjetos desafiadores. Estou sempre aberto a novas oportunidades e desafios.</p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <TechBadge name='Next.js' />
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Image
                    width={420}
                    height={404}
                    src='/images/home-hero2.png'
                    alt="Foto de perfil de Alex Alexandrino"
                    className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg-mb-0 shadow-2xl rounded-lg object-cover"
                />

            </div>
        </section>
    )
}