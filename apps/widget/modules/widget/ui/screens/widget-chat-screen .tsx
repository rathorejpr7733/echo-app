"use client";

import { Button } from "@workspace/ui/components/button";
import { WidgetHeader } from "../components/widget-header";
import { ArrowLeftIcon, MenuIcon } from "lucide-react";
import { useAtomValue, useSetAtom } from "jotai";
import { contactSessionIdAtomFamily, conversationIdAtoms, organizationIdAtom, screenAtom } from "../../atoms/widget-atoms";
import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

export const WidgetchatScreen = () => {

    const setScreen = useSetAtom(screenAtom);
    const setConversationId = useSetAtom(conversationIdAtoms);

    const conversationId = useAtomValue(conversationIdAtoms);
    const organizationId = useAtomValue(organizationIdAtom);
    const contactSessionId = useAtomValue(
        contactSessionIdAtomFamily(organizationId || "" )
    );

    const conversation = useQuery(
        api.public.conversations.getOne,conversationId && contactSessionId 
        ? {
            conversationId,
            contactSessionId,
        } : "skip"
    );

    const onBack = () => {
        setConversationId(null);
        setScreen("selection");
    };

    return(
        <>
        <WidgetHeader className="flex items-center justify-between">
                     <div className=" flex items-center justify-between ">
                <Button 
                onClick={onBack}
                 size="icon"
                 variant="transparent">

                    <ArrowLeftIcon />
                </Button>
                
                <p>Chat</p>
              </div>

              <Button 
                 size="icon"
                 variant="transparent"
              >
                <MenuIcon />
              </Button>


         </WidgetHeader>

        <div className=" flex flex-1 flex-col  gap-y-4 p-4 ">
        {JSON.stringify(conversation)}
        </div>

        </>
    )


}

