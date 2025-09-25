"use client";

import { useState } from "react";

type SidebarProps = {
  onSearch: (query: string) => void;
};

export default function Sidebar({ onSearch }: SidebarProps) {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <aside className="bg-surface-alt p-6 rounded-xl shadow-card h-fit mr-0 md:mr-6 border border-surface-subtle">
      <h2 className="text-xl font-bold text-brand mb-4">Pesquisar</h2>

      <label htmlFor="search" className="sr-only">
        Buscar conteúdo
      </label>
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M11 19a8 8 0 1 1 5.292-13.708A8 8 0 0 1 11 19Zm9 2-4.35-4.35"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          id="search"
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={handleChange}
          className="w-full pl-10 pr-3 py-2 rounded-md border border-surface-subtle bg-white text-ink placeholder:text-ink-muted focus-soft"
        />
      </div>

      {/* Espaço para futuros filtros (nível, tema, etc.) */}
      {/* <div className="mt-4 text-ink-muted text-sm">Filtros em breve</div> */}
    </aside>
  );
}
