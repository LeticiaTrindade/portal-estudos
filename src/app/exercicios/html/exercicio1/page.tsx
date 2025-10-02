"use client";

import { useState } from "react";
import CodePlayground from "@/components/codePlayground";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Exercicio {
  id: number;
  title: string;
  description: string;
  starterCode: string;
  solution: string;
}

const exercicios: Exercicio[] = [
  {
    id: 1,
    title: "Exercício 1: Estrutura básica",
    description:
      "Crie uma página HTML que contenha a estrutura mínima: <!DOCTYPE html>, <html>, <head> e <body>.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Minha primeira página</title>
  </head>
  <body>
    <h1>Olá Mundo!</h1>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Minha primeira página</title>
  </head>
  <body>
    <h1>Olá Mundo!</h1>
    <p>Essa é minha primeira página HTML completa.</p>
  </body>
</html>`,
  },
  {
    id: 2,
    title: "Exercício 2: Título e parágrafo",
    description:
      "Adicione um título principal <h1> e pelo menos um parágrafo <p> dentro do <body>.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Página com título</title>
  </head>
  <body>
    <!-- Adicione aqui um <h1> e um <p> -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Página com título</title>
  </head>
  <body>
    <h1>Meu Título Principal</h1>
    <p>Este é um parágrafo explicando o conteúdo.</p>
  </body>
</html>`,
  },
  {
    id: 3,
    title: "Exercício 3: Lista de compras",
    description:
      "Crie uma lista não ordenada (<ul>) com pelo menos 3 itens de compras.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Lista de Compras</title>
  </head>
  <body>
    <!-- Adicione aqui uma lista <ul> -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Lista de Compras</title>
  </head>
  <body>
    <h1>Minha Lista de Compras</h1>
    <ul>
      <li>Arroz</li>
      <li>Feijão</li>
      <li>Tomate</li>
    </ul>
  </body>
</html>`,
  },
];

export default function Exercicio1Page() {
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);

  const toggleSolution = (id: number) => {
    setOpenSolutions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand mb-8 text-center tracking-tight">
        Exercícios: Estrutura básica do HTML
      </h1>

      <div className="space-y-12">
        {exercicios.map((ex) => (
          <div
            key={ex.id}
            className="bg-surface-alt dark:bg-surface-darkAlt dark:border-transparent p-6 border border-surface-subtle rounded-xl shadow-card"
          >
            <h2 className="text-xl font-semibold mb-2 text-brand">
              {ex.title}
            </h2>
            <p className="text-ink-muted mb-4 dark:text-ink-dark">{ex.description}</p>

            {/* Playground do aluno (tema escuro local do componente) */}
            <CodePlayground code={ex.starterCode} language="html" />

            {/* Botão de solução com foco visível suave */}
            <button
              onClick={() => toggleSolution(ex.id)}
              className="mt-4 inline-flex items-center gap-2 text-sm text-brand hover:opacity-90 transition focus-soft rounded-md px-1 py-1"
            >
              {openSolutions.includes(ex.id) ? (
                <>
                  <ChevronUp size={16} /> Ocultar solução
                </>
              ) : (
                <>
                  <ChevronDown size={16} /> Ver solução
                </>
              )}
            </button>

            {/* Bloco de solução */}
            {openSolutions.includes(ex.id) && (
              <div className="mt-4">
                <CodePlayground code={ex.solution} language="html" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
