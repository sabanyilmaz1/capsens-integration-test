import { Form } from "@/components/sections/form";
import { Header } from "@/components/sections/header";
import { WaveFooter } from "@/components/sections/wave-footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen pb-16 md:pb-0 bg-light-grey">
      <Header />
      <main className="md:min-h-[calc(100vh-200px)] min-h-[calc(100vh-100px)]">
        <Form />
      </main>
      <WaveFooter />
    </div>
  );
}
