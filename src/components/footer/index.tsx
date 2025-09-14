// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-background text-secondary py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} LellyCodeLab. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/leticiatrindade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/leticiatrindadett"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
