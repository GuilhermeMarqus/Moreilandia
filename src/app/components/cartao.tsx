import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  titleColor?: string;       // cor personalizada do título
  descriptionColor?: string; // cor personalizada do texto
}

export default function Cartao({
  title,
  description,
  imageSrc,
  titleColor = "#783000",       // cor padrão (marrom)
  descriptionColor = "#742406", // cor padrão (marrom escuro)
}: CardProps) {
  return (
    <div className="max-w-xs rounded-2xl p-5 text-center">
      <div className="bg-gray-200 rounded-xl flex items-center justify-center h-60 mb-4">
        <Image
          src={imageSrc || "/placeholder-image.svg"}
          alt={title}
          width={60}
          height={60}
          className="opacity-70"
        />
      </div>
      <h2 className="text-[20px] font-bold mb-2 text" style={{ color: titleColor }}>
        {title}
      </h2>
      <p className="text-[17px]" style={{ color: descriptionColor }}>
        {description}
      </p>
    </div>
  );
}