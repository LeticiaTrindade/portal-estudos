"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = { href: string; label: string };

const links: NavLink[] = [
  { href: "/tutoriais", label: "Tutoriais" },
  { href: "/exercicios", label: "Exercícios" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="bg-surface/80 dark:bg-surface-dark/80 backdrop-blur supports-[backdrop-filter]:bg-surface/70 border-b border-surface-subtle  dark:border-surface-dark sticky top-0 z-40">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-brand dark:text-brand-soft tracking-tight">
          LellyCodeLab
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-ink-muted dark:text-ink-dark dark:hover:text-brand hover:text-brand transition-colors focus-soft rounded-md px-1 py-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão sanduíche - mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-ink hover:text-brand focus-soft"
        >
          <span className="sr-only">Abrir menu</span>
          <div className="relative h-5 w-6">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-surface-subtle dark:border-transparent transition-[max-height,opacity] duration-200 ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="px-6 py-3 space-y-2 bg-surface-alt dark:bg-surface-dark">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={close}
                className="block rounded-md px-3 py-2 text-ink dark:text-ink-dark hover:text-brand hover:bg-surface-subtle dark:hover:bg-surface-darkAlt focus-soft"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
