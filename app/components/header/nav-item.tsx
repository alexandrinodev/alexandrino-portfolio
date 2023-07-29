/* eslint-disable prettier/prettier */
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import { cn } from '../lib/utils'

type NovoItemProps = {
    label: string
    href: string
}

export const NavItem = ({ label, href }: NovoItemProps) => {
    const pathname = usePathname();

    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={cn(
                "text-gray-400 flex items-center gap-2 font-medium font-mono",
                isActive && 'text-grey-50'
            )}
        >
            <span className="text-emerald-400">#</span>
            {label}
        </Link>
    )
}
