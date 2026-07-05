"use client";

import { useRouter } from "next/navigation";

type ButtonProps = {
  texto: string;
  href?: string;
};

export default function Button({ texto, href }: ButtonProps) {
  const router = useRouter();

  function handleClick() {
    if (href) {
      router.push(href);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-lg bg-black px-6 py-3 text-white"
    >
      {texto}
    </button>
  );
}