// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-surface-subtle dark:bg-surface-dark text-ink py-8 mt-12 border-t border-surface-subtle dark:border-surface-dark">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-ink-muted dark:text-ink-dark">
          &copy; {new Date().getFullYear()} LellyCodeLab. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/leticiatrindade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand dark:text-brand-soft hover:opacity-90 transition-opacity focus-soft rounded-md px-1 py-1"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/leticiatrindadett"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand dark:text-brand-soft hover:opacity-90 transition-opacity focus-soft rounded-md px-1 py-1"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
