// src/components/sidebar/index.tsx
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
    <aside className="bg-background-alt p-6 rounded-lg shadow-md h-fit mr-6">
      <h2 className="text-xl font-bold text-primary mb-4">Pesquisar</h2>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </aside>
  );
}
