import Quiz from "@/(components)/quiz";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 p-10 bg-gradient-to-r from-purple-500 to-pink-500">
      <Quiz/>
    </main>
  );
}
