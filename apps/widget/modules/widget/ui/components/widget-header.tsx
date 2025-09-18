import { cn } from "@workspace/ui/lib/utils";


export const WidgetHeader = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <header className= 
         {cn( "bg-gradient-to-b from-[#6D28D9] to-[#A78BFA] p-4 text-primary-foreground",
            className,
        )}>
            {children}

        </header>

    );
};