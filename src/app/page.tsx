// src/pages/index.tsx
export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 bg-background">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Bem-vindo ao Portal de Estudos
        </h1>
        <p className="text-lg text-secondary max-w-2xl">
          Explore tutoriais, exemplos práticos e exercícios para aprender
          programação de forma clara e objetiva.
        </p>
      </section>

      {/* Seções adicionais podem ser adicionadas aqui */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">O que você encontrará:</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/tutoriais">
            <div className="bg-secondary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-primary font-bold mb-2">Tutoriais</h3>
              <p className="text-background">
                Aulas passo a passo para iniciantes em programação, com exemplos claros.
              </p>
            </div>
          </a>
          <a href="/exemplos">
            <div className="bg-secondary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-primary font-bold mb-2">Exemplos</h3>
              <p className="text-background">
                Trechos de código e demonstrações práticas para aprendizado rápido.
              </p>
            </div>
          </a>
          <a href="/exercicios">
            <div className="bg-secondary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-primary font-bold mb-2">Exercícios</h3>
              <p className="text-background">
                Quizzes e exercícios interativos para fixar o conteúdo estudado.
              </p>
            </div>
          </a>
        </div>
      </section >
    </>
  );
}
