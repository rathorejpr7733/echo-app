// AI Agent
import { google } from '@ai-sdk/google';
import { Agent } from "@convex-dev/agent";
import { components } from "../../../_generated/api";

export const supportAgent = new Agent(components.agent,{
  chat: google.chat("gemini-1.5-flash"),
  instructions: `You are a customer support agent. Use "resolveConversation" tool when user 
                 expresses finalization of the conversation. Use  "escalateConversation" tool when user expresses frustration, or requests a human explicitly.`,
  
});