export default function Home() {
  return (
    <>
      <section
        className="overflow-hidden flex flex-col items-center justify-center min-h-[68vh] text-center px-6 hero-warm
      "
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand dark:text-brand-soft mb-3 tracking-tight">
          Bem-vindo ao Portal de Estudos
        </h1>
        <p className="text-lg md:text-xl text-ink-muted dark:text-ink-dark max-w-2xl prose-relaxed">
          Explore tutoriais, exemplos práticos e exercícios para aprender
          programação de forma clara e objetiva.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="/tutoriais"
            className="px-5 py-3 rounded-xl bg-brand dark:bg-brand-soft text-white shadow-card hover:shadow-cardHover transition focus-soft"
          >
            Começar agora
          </a>
          <a
            href="/sobre"
            className="px-5 py-3 rounded-xl bg-surface-alt dark:bg-surface-dark text-ink dark:text-[#E6EDF7] hover:bg-surface-subtle dark:hover:bg-[#162235] shadow-card transition focus-soft border border-surface-subtle dark:border-[#1F2C45]"
          >
            Sobre o projeto
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-ink dark:text-[#E6EDF7] mb-6">
          O que você encontrará:
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/tutoriais" className="group">
            <div className="bg-surface-alt dark:bg-surface-darkAlt rounded-xl p-6 shadow-card group-hover:shadow-cardHover transition">
              <h3 className="text-brand dark:text-brand-soft font-bold mb-2">
                Tutoriais
              </h3>
              <p className="text-ink-muted dark:text-ink-dark">
                Aulas passo a passo para iniciantes em programação, com exemplos
                claros.
              </p>
            </div>
          </a>
          <a href="/exemplos" className="group">
            <div className="bg-surface-alt dark:bg-surface-darkAlt rounded-xl p-6 shadow-card group-hover:shadow-cardHover transition">
              <h3 className="text-brand dark:text-brand-soft font-bold mb-2">
                Exemplos
              </h3>
              <p className="text-ink-muted dark:text-ink-dark">
                Trechos de código e demonstrações práticas para aprendizado
                rápido.
              </p>
            </div>
          </a>
          <a href="/exercicios" className="group">
            <div className="bg-surface-alt dark:bg-surface-darkAlt rounded-xl p-6 shadow-card group-hover:shadow-cardHover transition">
              <h3 className="text-brand dark:text-brand-soft font-bold mb-2">
                Exercícios
              </h3>
              <p className="text-ink-muted dark:text-ink-dark">
                Quizzes e exercícios interativos para fixar o conteúdo estudado.
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
