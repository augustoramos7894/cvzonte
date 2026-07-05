import Button from "./button";

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      
      <p className="mb-4 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
        Currículos otimizados para ATS
      </p>

      <h1 className="mb-6 max-w-4xl text-5xl font-bold">
        Crie currículos que passam pelo ATS
      </h1>

      <p className="mb-8 max-w-2xl text-lg text-gray-600">
        Gere currículos profissionais, melhore suas experiências com IA e aumente suas chances de conquistar entrevistas.
      </p>

      <div className="flex gap-4">
        <Button texto="Criar meu curriculo" href="/create-cv" />
        <Button texto="Ver demonstração" />
      </div>

    </section>
  );
}