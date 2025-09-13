"use client";

import { useState, useRef, useEffect } from "react";
import { Copy } from "lucide-react";

interface CodePlaygroundProps {
  code: string;
  language?: string;
}

export default function CodePlayground({ code, language = "html" }: CodePlaygroundProps) {
  const [currentCode, setCurrentCode] = useState(code);
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLTextAreaElement | null>(null);
  const [height, setHeight] = useState(240);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (codeRef.current) {
      setHeight(codeRef.current.scrollHeight + 40);
    }
  }, [currentCode]);

  return (
    <div className="grid md:grid-cols-2 gap-6 my-6 max-h-[600px]">
      {/* Caixa de código no estilo CodeBlock */}
      <div className="relative rounded-xl overflow-hidden border border-pink-500/30">
        {/* Top bar estilo janela */}
        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#3a3a5a] to-[#1e1e2e] border-b border-pink-500/30">
          <span className="w-3 h-3 rounded-full bg-red-500 shadow-md"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500 shadow-md"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 shadow-md"></span>
        </div>

        {/* Área editável do código */ }
        <div className="relative bg-gradient-to-br from-[#0f0f1c] via-[#1e1e2e] to-[#2a2a40] max-h-[600px]">
          <button
            onClick={copyToClipboard}
            className="absolute top-3 right-3 text-gray-400 hover:text-primary transition"
          >
            <Copy size={18} />
          </button>

          <textarea
            ref={codeRef}
            value={currentCode}
            onChange={(e) => setCurrentCode(e.target.value)}
            spellCheck={false}
            className="w-full max-h-[600px] p-5 font-mono text-sm text-gray-100 resize-none outline-none overflow-x-auto leading-relaxed bg-gradient-to-br from-[#0f0f1c] via-[#1e1e2e] to-[#2a2a40]"
            style={{ height: height }}
          />

          {copied && (
            <span className="absolute top-3 right-12 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-md shadow">
              ✅ Copiado!
            </span>
          )}
        </div>
      </div>

      {/* Preview com altura sincronizada */}
      <div
        className="max-h-[600px] rounded-xl shadow-inner border border-gray-700 overflow-hidden bg-[#141a27]"
        style={{ height }}
      >
        {language === "html" ? (
          <iframe
            className="w-full h-full bg-white"
            srcDoc={currentCode}
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <p className="text-gray-400 text-sm p-4">
            Preview disponível apenas para HTML.
          </p>
        )}
      </div>
    </div>
  );
}
