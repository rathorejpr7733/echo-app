"use client";

import { useAtomValue } from "jotai";
import { WidgetAuthScreen } from "@/modules/widget/ui/screens/widget-auth-screen";
import{ screenAtom } from "@/modules/widget/atoms/widget-atoms";

interface Props {
    organizationId: string;
}

export const WidgetView = ({ organizationId }: Props) => {
    const screen = useAtomValue(screenAtom);


    const screenComponents = {
      error: <p>TODO:Error</p>,
      loading: <p>TODO:loading</p>,
      selection: <p>TODO:selection</p>,
      voice: <p>TODO:voice</p>,
      auth: <p>TODO:<WidgetAuthScreen/></p>,
      inbox: <p>TODO:inbox</p>,
      chat: <p>TODO:chat</p>,
      contact: <p>TODO:contact</p>,
          }
      
      

    return(
        // TODO: Confirm wheather or not  min-h-screen and min-w-screen is needed here
        <main className=" min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
                {screenComponents[screen]}

        </main>
    );
};