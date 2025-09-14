// src/components/contentGrid/index.tsx
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
      <p className="text-text-muted text-center">
        Nenhum item encontrado.
      </p>
    );
  }

  const levelColors: Record<ContentItem["level"], string> = {
    Iniciante: "bg-green-500/20 text-green-400",
    Intermediário: "bg-yellow-500/20 text-yellow-400",
    Avançado: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.link ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer group block bg-background-alt border border-pink-500/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow transition-all duration-300"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-primary font-bold text-lg mb-2 group-hover:text-primary-light transition-colors">
                {item.title}
              </h2>
              <p className="text-text-muted text-sm mb-4">
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
