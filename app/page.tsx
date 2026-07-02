import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold">
        Bem-Vindo ao CVzonte
      </h1>
    </main>
    </>
  );
}