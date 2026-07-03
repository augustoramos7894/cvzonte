"use client";

type ButtonProps = {
  texto: string;
};

export default function Button({ texto }: ButtonProps) {
  return (
    <button
      onClick={() => alert("Você clicou no botão!")}
      className="rounded-lg bg-black px-6 py-3 text-white"
    >
      {texto}
    </button>
  );
}