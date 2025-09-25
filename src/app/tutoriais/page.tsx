"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import ContentGrid from "@/components/contentGrid";

const tutorials = [
// 🟢 Iniciante
  {
    id: 1,
    title: "Introdução ao HTML",
    description: "Estrutura básica de uma página, tags essenciais (<html>, <head>, <body>).",
    level: "Iniciante",
    link: "/tutoriais/html/tutorial1"
  },
  {
    id: 2,
    title: "Estilizando com CSS",
    description: "Aplicando cores, fontes, margens e introdução ao conceito de classes e IDs.",
    level: "Iniciante",
  },
  {
    id: 3,
    title: "JavaScript Básico",
    description: "Variáveis, funções simples, manipulação de eventos (onclick).",
    level: "Iniciante",
  },
  {
    id: 4,
    title: "Trabalhando com Listas e Links no HTML",
    description: "Uso de <ul>, <ol>, <a>.",
    level: "Iniciante",
  },
  {
    id: 5,
    title: "Formulários em HTML",
    description: "Criando formulários com <input>, <label>, <textarea>, <select>.",
    level: "Iniciante",
  },
  {
    id: 6,
    title: "Box Model do CSS",
    description: "Margem, padding, borda e conteúdo.",
    level: "Iniciante",
  },
  {
    id: 7,
    title: "Seletores Avançados de CSS",
    description: "Como selecionar elementos de forma eficiente (.classe, #id, div > p, :hover).",
    level: "Iniciante",
  },

  // 🟡 Intermediário
  {
    id: 8,
    title: "JavaScript Interativo: Manipulando o DOM",
    description: "Alterar conteúdo e estilo com document.querySelector e innerHTML.",
    level: "Intermediário",
  },
  {
    id: 9,
    title: "Eventos no JavaScript",
    description: "Clique, teclado, mouse e formulários.",
    level: "Intermediário",
  },
  {
    id: 10,
    title: "Funções e Escopo em JavaScript",
    description: "Diferença entre variáveis locais e globais.",
    level: "Intermediário",
  },
  {
    id: 11,
    title: "Flexbox no CSS",
    description: "Criando layouts responsivos com Flexbox.",
    level: "Intermediário",
  },
  {
    id: 12,
    title: "Grid no CSS",
    description: "Criando layouts modernos com CSS Grid.",
    level: "Intermediário",
  },
  {
    id: 13,
    title: "Armazenamento no Navegador",
    description: "Usando localStorage e sessionStorage.",
    level: "Intermediário",
  },

  // 🔵 Avançado
  {
    id: 14,
    title: "JavaScript Assíncrono",
    description: "Promises, async/await e consumo de APIs.",
    level: "Avançado",
  },
  {
    id: 15,
    title: "APIs e Fetch no JavaScript",
    description: "Conectando sua aplicação com dados externos.",
    level: "Avançado",
  },
  {
    id: 16,
    title: "Introdução ao Git e GitHub",
    description: "Versionamento de código e colaboração.",
    level: "Avançado",
  },
  {
    id: 17,
    title: "Responsividade Avançada com Media Queries",
    description: "Adaptando sites para diferentes dispositivos.",
    level: "Avançado",
  },
  {
    id: 18,
    title: "Introdução a Frameworks JavaScript (Ex.: React básico)",
    description: "Como funciona um componente e o conceito de SPA.",
    level: "Avançado",
  },
];

export default function TutoriaisPage() {
  const [filteredItems, setFilteredItems] = useState(tutorials);

  const handleSearch = (query: string) => {
    const results = tutorials.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(results);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Barra lateral pode seguir clara também */}
      <Sidebar onSearch={handleSearch} />

      <div className="mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand tracking-tight text-center mb-6 pt-8">
          Tutoriais
        </h1>

        {/* Filtro/descrição opcional */}
        <p className="text-ink-muted text-center mb-8 prose-relaxed">
          Explore conteúdos do nível iniciante ao avançado no seu ritmo.
        </p>

        {/* ContentGrid deve usar cartões claros (bg-surface-alt/white + sombras suaves) */}
        <ContentGrid items={filteredItems} />
      </div>
    </section>
  );
}
