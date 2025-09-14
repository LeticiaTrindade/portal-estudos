// src/tutoriais/html/tutorial1.tsx
/* eslint-disable react/no-unescaped-entities */
import CodeBlock from "@/components/codeBlock/index";

export default function Tutorial1() {
  return (
    <article className="max-w-6xl mx-auto px-6 py-12 text-background">
      <h1 className="text-4xl font-bold text-primary mb-6">
        📘 Introdução ao HTML
      </h1>

      <p className="mb-4">
        <strong>Nível:</strong> Iniciante
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-accent mb-3">🎯 Objetivo</h2>
        <p>
          Aprender os fundamentos do HTML (HyperText Markup Language) e criar
          sua primeira página web.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-accent mb-3">📖 O que é HTML?</h2>
        <p className="mb-3">
          O HTML é a linguagem padrão usada para estruturar páginas da web. Ele
          define o que aparece na tela, como textos, imagens, links, listas e
          formulários.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Hyper:</strong> hipertexto → textos conectados através de links.</li>
          <li><strong>Text:</strong> o conteúdo que será exibido.</li>
          <li><strong>Markup:</strong> marcações (tags) que dizem ao navegador como organizar o conteúdo.</li>
          <li><strong>Language:</strong> linguagem.</li>
        </ul>
        <p className="mt-3">
          O HTML sozinho não define estilo (cores, fontes, etc.) → isso é trabalho
          do CSS.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-accent mb-3">
          🏗 Estrutura básica de uma página HTML
        </h2>
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

        <h3 className="text-lg font-semibold mt-4 mb-2">🔍 Explicação:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><code className="text-primary">&lt;!DOCTYPE html&gt;</code> → Informa ao navegador que é um documento HTML5.</li>
          <li><code className="text-primary">&lt;html&gt;</code> → A raiz do documento.</li>
          <li><code className="text-primary">&lt;head&gt;</code> → Configurações invisíveis da página.</li>
          <li><code className="text-primary">&lt;title&gt;</code> → Nome que aparece na aba do navegador.</li>
          <li><code className="text-primary">&lt;body&gt;</code> → Onde colocamos o conteúdo visível.</li>
          <li><code className="text-primary">&lt;h1&gt;</code> → Título principal.</li>
          <li><code className="text-primary">&lt;p&gt;</code> → Parágrafo de texto.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-accent mb-3">📌 Principais Tags Essenciais</h2>
        <table className="w-full border-collapse border border-gray-700 text-sm">
          <thead>
            <tr className="bg-secondary text-background">
              <th className="border border-gray-700 p-2">Tag</th>
              <th className="border border-gray-700 p-2">Significado</th>
              <th className="border border-gray-700 p-2">Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 p-2">&lt;h1&gt; ... &lt;h6&gt;</td>
              <td className="border border-gray-700 p-2">Títulos</td>
              <td className="border border-gray-700 p-2">&lt;h1&gt;Grande&lt;/h1&gt;</td>
            </tr>
            <tr>
              <td className="border border-gray-700 p-2">&lt;p&gt;</td>
              <td className="border border-gray-700 p-2">Parágrafo</td>
              <td className="border border-gray-700 p-2">&lt;p&gt;Olá!&lt;/p&gt;</td>
            </tr>
            <tr>
              <td className="border border-gray-700 p-2">&lt;a&gt;</td>
              <td className="border border-gray-700 p-2">Link</td>
              <td className="border border-gray-700 p-2">&lt;a href="https://google.com"&gt;Google&lt;/a&gt;</td>
            </tr>
            <tr>
              <td className="border border-gray-700 p-2">&lt;img&gt;</td>
              <td className="border border-gray-700 p-2">Imagem</td>
              <td className="border border-gray-700 p-2">&lt;img src="foto.jpg" alt="Minha foto"&gt;</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-accent mb-3">🖥 Exemplo Prático</h2>
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
    <a href=https://www.google.com" target="_blank">Visite o Google</a>
  </body>
</html>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-accent mb-3">📝 Exercício Prático</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Crie um arquivo <code className="text-primary">index.html</code>.</li>
          <li>Adicione um título &lt;h1&gt; com seu nome.</li>
          <li>Adicione um parágrafo &lt;p&gt; contando algo sobre você.</li>
          <li>Adicione uma imagem &lt;img&gt; (pode ser da internet).</li>
          <li>Adicione um link &lt;a&gt; para seu site favorito.</li>
          <li>Abra no navegador e veja o resultado 🎉</li>
        </ul>
      </section>
    </article>
  );
}
