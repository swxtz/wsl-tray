import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
}

export function Button({ children, className }: ButtonProps) {
    return (
        <button className={clsx(`rounded border bg-transparent px-4 py-3 text-xl hover:cursor-pointer transition-all flex items-center gap-4`, className)}>
            {children}
        </button>
    );
}