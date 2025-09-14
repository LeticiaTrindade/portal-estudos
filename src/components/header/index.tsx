// components/Header.tsx
import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  { href: "/tutoriais", label: "Tutoriais" },
  { href: "/exemplos", label: "Exemplos" },
  { href: "/exercicios", label: "Exercícios" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="bg-background text-secondary shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          LellyCodeLab
        </Link>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
