import Image from "next/image";

interface HoneyCardProps {
  imageSrc: string;
  text: string;
}

export default function HoneyCard({ imageSrc, text }: HoneyCardProps) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-[white] p-4 rounded-xl shadow-md">
        <div className="bg-white rounded-xl overflow-hidden max-w-xl">
          <div className="relative w-full h-120">
            <Image
              src={imageSrc}
              alt="Apicultor em Moreilândia"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-[#8B0000] font-semibold p-3">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}