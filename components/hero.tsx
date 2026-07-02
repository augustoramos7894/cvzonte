export default function Hero() {
    return (
        <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
            <p className="mb-4 rouned-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">Currículo otimizados para ATS
            </p>
            <h1 className="mb-6 max-w-4xl text 5xl font-bold">
                Crie currículos que passam pelo ATS
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-600">
                Gere currículos profisionais, melhore suas experiências com IA e aumente suas chance de conquistar entrevistas.
            </p>
            <div className="flex gap-4">
                <button className="rounded-lg bg-black px-6 py-3 text-white transition hover:opacity-90">
                    Criar meu currículo
                </button>
                <button className="rounded-lg border px-6 py-3 transition hover:bg-gray-100">
                    Ver demonstração
                </button>
            </div>
        </section>
    );
}