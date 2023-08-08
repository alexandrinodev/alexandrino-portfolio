import { cn } from "../lib/utils";

/* eslint-disable prettier/prettier */
type TechBadgeProps= {
    name: string;
    className?: string
}

export const TechBadge = ({ name, className}: TechBadgeProps) => {
    return(
        <span  className={cn("text-emerald-400 bg-emerald-900/80 text-sm py-1 px-3 rounded-lg", className)}>
            {name}
        </span>
    )
}