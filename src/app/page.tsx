import { Header } from "@/components/sections/header";
import { WaveFooter } from "@/components/sections/wave-footer";

export default function Home() {
  return (
    <div className="w-full relative">
      <Header />
      <main className="h-[calc(100vh-160px)] md:h-[calc(100vh-190px)] xl:h-[calc(100vh-196px)] bg-light-grey">
        g
      </main>
      <WaveFooter />
    </div>
  );
}
