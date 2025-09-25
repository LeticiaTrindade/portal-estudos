type ContentItem = {
  id: number;
  title: string;
  description: string;
  level: string;
  link?: string;
};

type ContentGridProps = {
  items: ContentItem[];
};

export default function ContentGrid({ items }: ContentGridProps) {
  if (items.length === 0) {
    return (
      <p className="text-ink-muted text-center">
        Nenhum item encontrado.
      </p>
    );
  }

  // Cores harmonizadas com o novo tema
  const levelColors: Record<ContentItem["level"], string> = {
    Iniciante: "bg-[#E7F7F1] text-[#0EA47A]",           // verde suave
    Intermediário: "bg-[#E9F0FB] text-support-blue",     // azul desaturado
    Avançado: "bg-[#FDECF1] text-brand-strong",          // rosa/berry
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.link ?? "#"}
          target={item.link ? "_blank" : undefined}
          rel={item.link ? "noopener noreferrer" : undefined}
          className="group block bg-surface-alt border border-surface-subtle rounded-xl p-6 shadow-card hover:shadow-cardHover transition focus-soft"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-brand font-semibold text-lg mb-2 group-hover:opacity-90 transition-opacity">
                {item.title}
              </h2>
              <p className="text-ink-muted text-sm mb-4">
                {item.description}
              </p>
            </div>

            <span
              className={`self-start px-3 py-1 rounded-full text-xs font-medium ${levelColors[item.level]}`}
            >
              {item.level}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
