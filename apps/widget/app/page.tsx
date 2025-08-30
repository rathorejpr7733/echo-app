"use client";

import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  } = useVapi();

  return (
    <div className="flex flex-col items-center justify-center min-h-svh max-w-md mx-auto w-full gap-4">
      <Button onClick={startCall}>
        Start call
      </Button>

      <Button onClick={endCall} variant="destructive">
        End call
      </Button>

      <p>isConnected: {String(isConnected)}</p>
      <p>isConnecting: {String(isConnecting)}</p>
      <p>isSpeaking: {String(isSpeaking)}</p>

    <p>{JSON.stringify(transcript,null,2)}</p>
    </div>
  );
}
