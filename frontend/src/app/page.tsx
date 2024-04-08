import ServerAPI from "@/request-manager/server-api";
import Image from "next/image";

export default async function Home() {
  const serverTime = await ServerAPI.getTime();
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      {serverTime && (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Server Time</h1>
          <p className="text-xl">{serverTime.server_time}</p>
        </div>
      )}
    </main>
  );
}
