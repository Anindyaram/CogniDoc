import { Pinecone } from "@pinecone-database/pinecone";

export const getPineconeClient = () => {
  const client = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
    environment:'us-east-1'
  });

  return client;
};