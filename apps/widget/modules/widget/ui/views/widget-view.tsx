"use client";

import { useAtomValue } from "jotai";
import { WidgetAuthScreen } from "@/modules/widget/ui/screens/widget-auth-screen";
import{ screenAtom } from "@/modules/widget/atoms/widget-atoms";
import { WidgetErrorScreen } from "@/modules/widget/ui/screens/widget-error-screen";
import { WidgetLoadingScreen } from "@/modules/widget/ui/screens/widget-loading-screen ";
import { WidgetSelectionScreen } from "@/modules/widget/ui/screens/widget-selection-screen";
import { WidgetChatScreen } from "@/modules/widget/ui/screens/widget-chat-screen ";
import { WidgetInboxScreen } from "../screens/widget-inbox-screen";
import { WidgetVoiceScreen } from "../screens/widget-voice-screen";
import { WidgetContactScreen } from "../screens/widget-contact-screen";

interface Props {
    organizationId: string | null;
}

export const WidgetView = ({ organizationId }: Props) => {
    const screen = useAtomValue(screenAtom);


    const screenComponents = {
      error: <WidgetErrorScreen />,
      loading: <WidgetLoadingScreen organizationId={organizationId} />,
      selection: <WidgetSelectionScreen/>,
      voice: <WidgetVoiceScreen />,
      auth: <WidgetAuthScreen/>,
      inbox: <WidgetInboxScreen />,
      chat: <WidgetChatScreen />,
      contact: <WidgetContactScreen />,
          }
      
      

    return(
        <main className="flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
                {screenComponents[screen]}

        </main>
    );
};