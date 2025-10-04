/* eslint-disable react/no-unescaped-entities */
import CodeBlock from "@/components/codeBlock/index";

export default function Tutorial1() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 text-ink prose-relaxed">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand dark:text-brand-soft mb-2 tracking-tight">
        📘 Introdução ao HTML
      </h1>

      <p className="mb-6 text-ink-muted dark:text-ink-dark">
        <strong className="text-ink dark:text-ink-dark">Nível:</strong> Iniciante
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand dark:text-brand-soft mb-3">🎯 Objetivo</h2>
        <p className="dark:text-ink-dark">
          Aprender os fundamentos do HTML (HyperText Markup Language) e criar
          sua primeira página web.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand dark:text-brand-soft mb-3">📖 O que é HTML?</h2>
        <p className="mb-3 dark:text-ink-dark">
          O HTML é a linguagem padrão usada para estruturar páginas da web. Ele
          define o que aparece na tela, como textos, imagens, links, listas e
          formulários.
        </p>
        <ul className="list-disc list-inside space-y-1 text-ink dark:text-ink-dark">
          <li><strong>Hyper:</strong> hipertexto → textos conectados através de links.</li>
          <li><strong>Text:</strong> o conteúdo que será exibido.</li>
          <li><strong>Markup:</strong> marcações (tags) que dizem ao navegador como organizar o conteúdo.</li>
          <li><strong>Language:</strong> linguagem.</li>
        </ul>
        <p className="mt-3 dark:text-ink-dark">
          O HTML sozinho não define estilo (cores, fontes, etc.) → isso é trabalho
          do CSS.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand dark:text-brand-soft mb-3">
          🏗 Estrutura básica de uma página HTML
        </h2>

        {/* CodeBlock mantém tema escuro local (tokens code.*) */}
        <CodeBlock>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Minha Primeira Página</title>
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
    <p>Esta é minha primeira página HTML.</p>
  </body>
</html>`}
        </CodeBlock>

        <h3 className="text-lg font-semibold mt-4 mb-2 text-ink dark:text-ink-dark">🔍 Explicação:</h3>
        <ul className="list-disc list-inside space-y-1 text-ink">
          <li className="dark:text-ink-dark"><code className="text-brand dark:text-brand-soft" >&lt;!DOCTYPE html&gt;</code> → Informa ao navegador que é um documento HTML5.</li>
          <li className="dark:text-ink-dark"><code className="text-brand dark:text-brand-soft" >&lt;html&gt;</code> → A raiz do documento.</li>
          <li className="dark:text-ink-dark"><code className="text-brand dark:text-brand-soft" >&lt;head&gt;</code> → Configurações invisíveis da página.</li>
          <li className="dark:text-ink-dark"><code className="text-brand dark:text-brand-soft" >&lt;title&gt;</code> → Nome que aparece na aba do navegador.</li>
          <li className="dark:text-ink-dark"><code className="text-brand dark:text-brand-soft" >&lt;body&gt;</code> → Onde colocamos o conteúdo visível.</li>
          <li className="dark:text-ink-dark"><code className="text-brand dark:text-brand-soft" >&lt;h1&gt;</code> → Título principal.</li>
          <li className="dark:text-ink-dark"><code className="text-brand dark:text-brand-soft" >&lt;p&gt;</code> → Parágrafo de texto.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand dark:text-brand-soft mb-3">📌 Principais Tags Essenciais</h2>
        <div className="overflow-x-auto rounded-xl border border-surface-subtle">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-subtle text-ink">
                <th className="p-2 text-left">Tag</th>
                <th className="p-2 text-left">Significado</th>
                <th className="p-2 text-left">Exemplo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-subtle">
              <tr>
                <td className="p-2 dark:text-ink-dark">&lt;h1&gt; ... &lt;h6&gt;</td>
                <td className="p-2 dark:text-ink-dark">Títulos</td>
                <td className="p-2 dark:text-ink-dark">&lt;h1&gt;Grande&lt;/h1&gt;</td>
              </tr>
              <tr>
                <td className="p-2 dark:text-ink-dark">&lt;p&gt;</td>
                <td className="p-2 dark:text-ink-dark">Parágrafo</td>
                <td className="p-2 dark:text-ink-dark">&lt;p&gt;Olá!&lt;/p&gt;</td>
              </tr>
              <tr>
                <td className="p-2 dark:text-ink-dark">&lt;a&gt;</td>
                <td className="p-2 dark:text-ink-dark">Link</td>
                <td className="p-2 dark:text-ink-dark">&lt;a href="https://google.com"&gt;Google&lt;/a&gt;</td>
              </tr>
              <tr>
                <td className="p-2 dark:text-ink-dark">&lt;img&gt;</td>
                <td className="p-2 dark:text-ink-dark">Imagem</td>
                <td className="p-2 dark:text-ink-dark">&lt;img src="foto.jpg" alt="Minha foto"&gt;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand dark:text-brand-soft mb-3">🖥 Exemplo Prático</h2>
        <CodeBlock>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Minha Primeira Página</title>
  </head>
  <body>
    <h1>Bem-vindo ao meu site!</h1>
    <p>Este é um parágrafo de exemplo.</p>
    <a href="https://www.google.com" target="_blank">Visite o Google</a>
  </body>
</html>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-brand dark:text-brand-soft mb-3">📝 Exercício Prático</h2>
        <ul className="list-disc list-inside space-y-2 text-ink">
          <li className="dark:text-ink-dark">Crie um arquivo <code className="text-brand dark:text-brand-soft">index.html</code>.</li>
          <li className="dark:text-ink-dark">Adicione um título &lt;h1&gt; com seu nome.</li>
          <li className="dark:text-ink-dark">Adicione um parágrafo &lt;p&gt; contando algo sobre você.</li>
          <li className="dark:text-ink-dark">Adicione uma imagem &lt;img&gt; (pode ser da internet).</li>
          <li className="dark:text-ink-dark">Adicione um link &lt;a&gt; para seu site favorito.</li>
          <li className="dark:text-ink-dark">Abra no navegador e veja o resultado 🎉</li>
        </ul>
      </section>
    </article>
  );
}
