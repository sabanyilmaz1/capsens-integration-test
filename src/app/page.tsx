import { Form } from "@/components/sections/form";
import { Header } from "@/components/sections/header";
import { WaveFooter } from "@/components/sections/wave-footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main className="bg-light-grey min-h-[calc(100vh-200px)]">
        <Form />
      </main>
      <WaveFooter />
    </div>
  );
}
