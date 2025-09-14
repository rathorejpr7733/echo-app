import Vapi from "@vapi-ai/web";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { vapiSecretsAtom, widgetSettingsAtom } from "../atoms/widget-atoms";

interface TranscriptMessage {
  role: "user" | "assistant";
  text: string;
}

export const useVapi = () => {
  const vapiSecrets = useAtomValue(vapiSecretsAtom);
  const widgetSettings = useAtomValue(widgetSettingsAtom);

  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);

  useEffect(() => {
      if (!vapiSecrets) {
        return;
      }

    const vapiInstance = new Vapi(vapiSecrets.publicApiKey);
    setVapi(vapiInstance);

    // Call lifecycle
    vapiInstance.on("call-start", () => {
      setIsConnected(true);
      setIsConnecting(false);
      setTranscript([]);
    });

    vapiInstance.on("call-end", () => {
      setIsConnected(false);
      setIsConnecting(false);
      setIsSpeaking(false);
      setTranscript([]);
    });

    // Speaking events
    vapiInstance.on("speech-start", () => {
      setIsSpeaking(true);
    });

    vapiInstance.on("speech-end", () => {
      setIsSpeaking(false);
    });

    vapiInstance.on("error", (error: any) => {
      console.error("VAPI_ERROR", error);
      setIsConnecting(false);
    });

    // Transcript messages
    vapiInstance.on("message", (message: {
      transcript: string;
      role: string;
      type: string;
      transcriptType: string;
    }) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setTranscript((prev) => [
          ...prev,
          {
            role: message.role === "user" ? "user" : "assistant",
            text: message.transcript,
          },
        ]);
      }
    });

    return () => {
      vapiInstance?.stop();
    };
  }, []);

  const startCall = () => {
    if (!vapiSecrets || !widgetSettings?.vapiSettings?.assistantId) {
      return;
    }
    setIsConnecting(true);

    if (vapi) {
       vapi.start(widgetSettings.vapiSettings.assistantId);
    }
  };

  const endCall = () => {
    vapi?.stop();
  };

  return {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  };
};
