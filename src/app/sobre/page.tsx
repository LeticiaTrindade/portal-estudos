export default function SobrePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand tracking-tight mb-3">
          Sobre o LellyCodeLab
        </h1>
        <p className="text-ink-muted dark:text-ink-dark prose-relaxed max-w-3xl mx-auto">
          Um portal de estudos acolhedor para aprender programação do zero ao avançado, com foco em clareza, prática e representatividade feminina na tecnologia.
        </p>
      </header>

      {/* Missão e visão */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-surface-alt dark:bg-surface-darkAlt dark:border-transparent border border-surface-subtle rounded-xl p-6 shadow-card">
          <h2 className="text-xl font-semibold text-ink dark:text-ink-dark mb-2">Missão</h2>
          <p className="text-ink-muted dark:text-ink-dark">
            Democratizar o acesso ao aprendizado de tecnologia com conteúdos diretos, exemplos práticos e exercícios que respeitam o ritmo de cada pessoa.
          </p>
        </div>
        <div className="bg-surface-alt dark:bg-surface-darkAlt dark:border-transparent border border-surface-subtle rounded-xl p-6 shadow-card">
          <h2 className="text-xl font-semibold text-ink dark:text-ink-dark mb-2">Visão</h2>
          <p className="text-ink-muted dark:text-ink-dark">
            Construir uma comunidade inclusiva onde mais meninas e mulheres se sintam seguras para aprender, criar e liderar em computação.
          </p>
        </div>
      </div>

      {/* Valores */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-ink dark:text-ink-dark mb-4">Valores</h2>
        <ul className="grid md:grid-cols-3 gap-4">
          <li className="bg-surface-alt dark:bg-surface-darkAlt dark:border-transparent border border-surface-subtle rounded-xl p-5 shadow-card">
            <h3 className="font-semibold text-brand mb-1">Clareza</h3>
            <p className="text-ink-muted dark:text-ink-dark">Explicações objetivas, passo a passo e sem jargões desnecessários.</p>
          </li>
          <li className="bg-surface-alt dark:bg-surface-darkAlt dark:border-transparent border border-surface-subtle rounded-xl p-5 shadow-card">
            <h3 className="font-semibold text-brand mb-1">Acolhimento</h3>
            <p className="text-ink-muted dark:text-ink-dark">Visual suave, linguagem inclusiva e foco na experiência de quem está começando.</p>
          </li>
          <li className="bg-surface-alt dark:bg-surface-darkAlt dark:border-transparent border border-surface-subtle rounded-xl p-5 shadow-card">
            <h3 className="font-semibold text-brand mb-1">Prática</h3>
            <p className="text-ink-muted dark:text-ink-dark">Tutoriais com exemplos e exercícios para aprender fazendo.</p>
          </li>
        </ul>
      </section>

      {/* Quem faz */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-ink dark:text-ink-dark mb-4">Quem faz</h2>
        <div className="bg-surface-alt dark:bg-surface-darkAlt dark:border-transparent border border-surface-subtle rounded-xl p-6 shadow-card">
          <p className="text-ink dark:text-ink-dark">
            O LellyCodeLab é desenvolvido por Letícia Trindade, estudante da UFRPE, apaixonada por ensinar e por aproximar meninas da programação. A escolha do rosa como cor principal celebra essa identidade e reforça a presença feminina na tecnologia.
          </p>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-ink dark:text-ink-dark mb-4">Tecnologias</h2>
        <ul className="grid md:grid-cols-4 gap-4">
          <li className="bg-surface-alt dark:bg-surface-darkAlt dark:border-transparent border border-surface-subtle rounded-xl p-4 text-center shadow-card dark:text-ink-dark">Next.js</li>
          <li className="bg-surface-alt dark:bg-surface-darkAlt dark:border-transparent border border-surface-subtle rounded-xl p-4 text-center shadow-card dark:text-ink-dark">TypeScript</li>
          <li className="bg-surface-alt dark:bg-surface-darkAlt dark:border-transparent border border-surface-subtle rounded-xl p-4 text-center shadow-card dark:text-ink-dark">Tailwind CSS</li>
          <li className="bg-surface-alt dark:bg-surface-darkAlt dark:border-transparent border border-surface-subtle rounded-xl p-4 text-center shadow-card dark:text-ink-dark">Resend/Nodemailer</li>
        </ul>
      </section>

      {/* Como contribuir */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-ink dark:text-ink-dark mb-4">Como contribuir</h2>
        <div className="bg-surface-alt dark:bg-surface-darkAlt dark:border-transparent border border-surface-subtle rounded-xl p-6 shadow-card">
          <p className="text-ink dark:text-ink-dark">
            Feedbacks, correções e novas ideias são bem‑vindos. Acesse o repositório no GitHub, abra uma issue com sugestões ou envie uma mensagem pela página de contato.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <div className="text-center">
        <a
          href="/tutoriais"
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-brand text-white shadow-card hover:shadow-cardHover transition focus-soft"
        >
          Começar a aprender
        </a>
      </div>
    </section>
  );
}
