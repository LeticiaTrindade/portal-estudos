"use client";

import { useState } from "react";

type FormData = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

export default function ContatoPage() {
  const [data, setData] = useState<FormData>({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [field]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!data.nome || !data.email || !data.mensagem) {
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");

      // Exemplo de envio para API (implemente /api/contato)
      // const res = await fetch("/api/contato", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // if (!res.ok) throw new Error("Falha ao enviar");

      // Placeholder: simula envio
      await new Promise((r) => setTimeout(r, 900));

      setStatus("success");
      setData({ nome: "", email: "", assunto: "", mensagem: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand tracking-tight mb-2">
          Contato
        </h1>
        <p className="text-ink-muted prose-relaxed">
          Dúvidas, sugestões ou parcerias? Envie uma mensagem. Respostas chegam o quanto antes.
        </p>
      </header>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Cartões de contato rápido */}
        <aside className="md:col-span-2 space-y-4">
          <div className="bg-surface-alt border border-surface-subtle rounded-xl p-5 shadow-card">
            <h2 className="text-lg font-semibold text-ink mb-1">E-mail</h2>
            <a
              href="mailto:leticia.trindade@ufrpe.br"
              className="text-brand hover:opacity-90 focus-soft rounded-md px-1 py-1 inline-block"
            >
              leticia.trindade@ufrpe.br
            </a>
          </div>

          <div className="bg-surface-alt border border-surface-subtle rounded-xl p-5 shadow-card">
            <h2 className="text-lg font-semibold text-ink mb-1">GitHub</h2>
            <a
              href="https://github.com/leticiatrindade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:opacity-90 focus-soft rounded-md px-1 py-1 inline-block"
            >
              github.com/leticiatrindade
            </a>
          </div>

          <div className="bg-surface-alt border border-surface-subtle rounded-xl p-5 shadow-card">
            <h2 className="text-lg font-semibold text-ink mb-1">LinkedIn</h2>
            <a
              href="https://linkedin.com/in/leticiatrindadett"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:opacity-90 focus-soft rounded-md px-1 py-1 inline-block"
            >
              linkedin.com/in/leticiatrindadett
            </a>
          </div>
        </aside>

        {/* Formulário */}
        <form
          onSubmit={onSubmit}
          className="md:col-span-3 bg-surface-alt border border-surface-subtle rounded-xl p-6 shadow-card space-y-4"
        >
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-ink mb-1">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              value={data.nome}
              onChange={onChange("nome")}
              className="w-full rounded-md border border-surface-subtle bg-white text-ink placeholder:text-ink-muted px-3 py-2 focus-soft"
              placeholder="Seu nome"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={onChange("email")}
              className="w-full rounded-md border border-surface-subtle bg-white text-ink placeholder:text-ink-muted px-3 py-2 focus-soft"
              placeholder="voce@exemplo.com"
              required
            />
          </div>

          <div>
            <label htmlFor="assunto" className="block text-sm font-medium text-ink mb-1">
              Assunto (opcional)
            </label>
            <input
              id="assunto"
              type="text"
              value={data.assunto}
              onChange={onChange("assunto")}
              className="w-full rounded-md border border-surface-subtle bg-white text-ink placeholder:text-ink-muted px-3 py-2 focus-soft"
              placeholder="Sobre o que gostaria de falar?"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-ink mb-1">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              value={data.mensagem}
              onChange={onChange("mensagem")}
              className="w-full min-h-[140px] rounded-md border border-surface-subtle bg-white text-ink placeholder:text-ink-muted px-3 py-2 focus-soft"
              placeholder="Escreva sua mensagem..."
              required
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-brand text-white shadow-card hover:shadow-cardHover transition disabled:opacity-60 focus-soft"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensagem"}
            </button>

            {status === "success" && (
              <span className="text-sm text-ink">Mensagem enviada com sucesso!</span>
            )}
            {status === "error" && (
              <span className="text-sm text-brand-strong">
                Verifique os campos obrigatórios.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
