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
    <div className="flex-col flex items-center justify-center max-w-xs rounded-2xl p-4 text-center">
      <div className="bg-gray-200 rounded-xl flex items-center justify-center mb-6">
        <Image
          src={imageSrc || "/placeholder-image.svg"}
          alt={title}
          width={400}
          height={600}
          className="rounded-xl"
        />
      </div>
      <h2 className="text-[20px] font-bold mb-2" style={{ color: titleColor }}>
        {title}
      </h2>
      <p className="text-[17px]" style={{ color: descriptionColor }}>
        {description}
      </p>
    </div>
  );
}