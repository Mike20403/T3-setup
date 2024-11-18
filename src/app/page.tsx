'use client'
import { ChatInput } from "@/components/ChatInput";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  const handleSendMessage = async (message: string) => {
    console.log("send message", message);
  };

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#D2FF72] to-[#73EC8B] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-[8rem] font-bold text-[#137B5C]">Chatizen</h1>
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </main>
    </HydrateClient>
  );
}
