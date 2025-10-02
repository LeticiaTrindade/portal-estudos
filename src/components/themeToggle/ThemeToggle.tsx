// src/components/themeToggle/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const next = isDark ? 'light' : 'dark';

  return (
    <button
      type="button"
      aria-label={`Ativar tema ${next === 'dark' ? 'escuro' : 'claro'}`}
      onClick={() => setTheme(next)}
      className="relative inline-flex items-center justify-center h-12 w-12 rounded-full border border-surface-subtle bg-surface-alt text-ink shadow-card transition
                 hover:shadow-cardHover focus:outline-none focus-visible:ring-2 focus-visible:ring-state-focus
                 dark:border-[#1F2C45] dark:bg-[#111A2B] dark:text-[#E6EDF7]"
    >
      {/* Lua aparece no claro (ação: ir para escuro) */}
      <Moon
        className="h-5 w-5 transition-all duration-300 ease-out
                   opacity-100 scale-100 rotate-0
                   dark:opacity-0 dark:scale-0 dark:-rotate-90"
      />
      {/* Sol aparece no escuro (ação: ir para claro) */}
      <Sun
        className="h-5 w-5 absolute transition-all duration-300 ease-out
                   opacity-0 scale-0 rotate-90
                   dark:opacity-100 dark:scale-100 dark:rotate-0"
      />
    </button>
  );
}
