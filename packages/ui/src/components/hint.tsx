"use  client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    
} from "@workspace/ui/components/tooltip";

interface HintProps {
    children: React.ReactNode;
    text:string;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
};

export const Hint = ({
    children,
    text,
    side = "top",
    align = "center",
}: HintProps ) => {
    return(
        <TooltipProvider >
            <Tooltip >
                <TooltipTrigger  asChild >
                {children} 
                </TooltipTrigger >
                <TooltipContent className="bg-[#6D28D9]" >
                    <p>{text}</p>
                    
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};