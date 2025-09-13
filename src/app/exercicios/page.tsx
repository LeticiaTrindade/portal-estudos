// src/pages/exercicios/page.tsx
"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import ContentGrid from "@/components/contentGrid";

const exercises = [
  // 🟢 Iniciante
  {
    id: 1,
    title: "Estrutura básica do HTML",
    description: "Monte uma página com <html>, <head> e <body> corretamente.",
    level: "Iniciante",
    link: "/exercicios/html/exercicio1",
  },
  {
    id: 2,
    title: "Primeiro parágrafo",
    description: "Crie uma página que exiba um título e um parágrafo de texto.",
    level: "Iniciante",
    link: "/exercicios/html/exercicio2",
  },
  {
    id: 3,
    title: "Lista de compras",
    description: "Monte uma lista ordenada e não ordenada.",
    level: "Iniciante",
    link: "/exercicios/html/exercicio3",
  },

  // 🟡 Intermediário
  {
    id: 4,
    title: "Formulário simples",
    description: "Crie um formulário com campo de texto, senha e botão de envio.",
    level: "Intermediário",
    link: "/exercicios/html/exercicio4",
  },
  {
    id: 5,
    title: "Estilos com CSS",
    description: "Estilize uma página usando classes e IDs.",
    level: "Intermediário",
    link: "/exercicios/css/exercicio1",
  },

  // 🔵 Avançado
  {
    id: 6,
    title: "Eventos com JavaScript",
    description: "Crie um botão que altera o texto de um parágrafo ao ser clicado.",
    level: "Avançado",
    link: "/exercicios/js/exercicio1",
  },
  {
    id: 7,
    title: "Fetch API",
    description: "Busque dados de uma API e exiba-os em uma lista.",
    level: "Avançado",
    link: "/exercicios/js/exercicio2",
  },
];

export default function ExerciciosPage() {
  const [filteredItems, setFilteredItems] = useState(exercises);

  const handleSearch = (query: string) => {
    const results = exercises.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(results);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <Sidebar onSearch={handleSearch} />

      <div className="mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Exercícios
        </h1>
        <ContentGrid items={filteredItems} />
      </div>
    </section>
  );
}
