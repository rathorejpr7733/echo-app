import { google } from "@ai-sdk/google";
import { RAG } from "@convex-dev/rag";
import { components } from "../../_generated/api";

// Gemini `text-embedding-004` has 768 dimensions
const rag = new RAG(components.rag, {
  
  textEmbeddingModel: google.textEmbeddingModel("text-embedding-004"),
    embeddingDimension: 768,
});

export default rag;


