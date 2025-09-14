"use client";
import { useState } from "react";
import { Copy } from "lucide-react";
import { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(String(children));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-pink-500/30">
      {/* Top bar estilo janela */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#3a3a5a] to-[#1e1e2e] border-b border-pink-500/30">
        <span className="w-3 h-3 rounded-full bg-red-500 shadow-md"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500 shadow-md"></span>
        <span className="w-3 h-3 rounded-full bg-green-500 shadow-md"></span>
      </div>

      {/* Área do código */}
      <div className="relative bg-gradient-to-br from-[#0f0f1c] via-[#1e1e2e] to-[#2a2a40] text-gray-100 text-sm p-5 font-mono overflow-x-auto leading-relaxed">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 text-gray-400 hover:text-primary transition"
        >
          <Copy size={18} />
        </button>

        <pre className="whitespace-pre-wrap">{children}</pre>

        {copied && (
          <span className="absolute top-3 right-12 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-md shadow">
            ✅ Copiado!
          </span>
        )}
      </div>
    </div>
  );
}
