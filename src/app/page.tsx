import { Form } from "@/components/sections/form";
import { Header } from "@/components/sections/header";
import { WaveFooter } from "@/components/sections/wave-footer";

export default function Home() {
  return (
    <div className="w-full relative min-h-screen">
      <Header />
      <main className="bg-light-grey">
        <Form />
      </main>
      <WaveFooter />
    </div>
  );
}
