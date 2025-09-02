// AI Agent
import { google } from '@ai-sdk/google';
import { Agent } from "@convex-dev/agent";
import { components } from "../../../_generated/api";

export const supportAgent = new Agent(components.agent,{
  chat: google.chat("gemini-1.5-pro-latest"),
  instructions: "You are a customer support agent"
});