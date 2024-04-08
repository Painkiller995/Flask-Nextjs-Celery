import ServerAPI from "@/request-manager/server-api";
import Image from "next/image";

export default async function Home() {
  let serverTime = null;
  let errorMessage = null;

  try {
    serverTime = await ServerAPI.getTime();
  } catch (error) {
    errorMessage = "Error fetching server time. Please try again later.";
    console.error("Error fetching server time:", error);
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      {errorMessage ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Error</h1>
          <p className="text-xl">{errorMessage}</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Server Time</h1>
          {serverTime && <p className="text-xl">{serverTime.server_time}</p>}
        </div>
      )}
    </main>
  );
}
