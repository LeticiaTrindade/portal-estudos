"use client";

import { useState } from "react";
import CodeBlock from "@/app/components/codeBlock/index";
import CodePlayground from "@/app/components/codePlayground";

export default function ExerciciosPage() {
  const [code, setCode] = useState("<h1>Olá, mundo!</h1>");
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Exercícios</h1>
      <p className="text-muted-foreground">
        Aqui você pode praticar seus conhecimentos de HTML!
      </p>

      <div className="bg-card p-4 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Exercício 1</h2>
        <p className="text-muted-foreground">
          Crie um título <code>&lt;h1&gt;</code> escrito "Olá, mundo!".
        </p>

        {/* Área de código editável */}
        <textarea
          className="w-full h-32 p-3 font-mono text-sm rounded-lg bg-[#1e1e1e] text-white focus:outline-none"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="flex gap-3">
          <Button onClick={() => setShowResult(true)}>Executar</Button>
          <Button
            variant="secondary"
            onClick={() => setCode("<h1>Olá, mundo!</h1>")}
          >
            Ver solução
          </Button>
        </div>

        {/* Resultado */}
        {showResult && (
          <div className="p-4 rounded-lg bg-[#1e1e1e] text-white">
            <div dangerouslySetInnerHTML={{ __html: code }} />
          </div>
        )}
      </div>
    </div>
  );
}
