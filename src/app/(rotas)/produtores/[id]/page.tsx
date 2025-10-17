import { notFound } from "next/navigation";
import Image from "next/image";

const produtores = [
  {
    id: 1,
    nome: "Francisco Ferreira Filho Florêncio",
    cidade: "Moreilândia",
    estado: "Pernambuco",
    produtos: 1,
    membroDesde: 2025,
    telefone: "87 9 9999-9999",
    email: "produtor@email.com",
    foto: "/Produtor 1.svg",
  },
  {
    id: 2,
    nome: "João Silva",
    cidade: "Juazeiro do Norte",
    estado: "Ceará",
    produtos: 0,
    membroDesde: 2025,
    telefone: "87 9 9999-9999",
    email: "produtor@email.com",
    foto: "/images/default-user.png",
  },
  {
    id: 3,
    nome: "Maria Pereira",
    cidade: "Cajazeiras",
    estado: "Pernambuco",
    produtos: 3,
    membroDesde: 2025,
    telefone: "87 9 9999-9999",
    email: "produtor@email.com",
    foto: "/images/default-user.png",
  },
];

export default function ProdutorPage({ params }: { params: { id: string } }) {
  const produtor = produtores.find((p) => p.id === Number(params.id));
  if (!produtor) return notFound();

  return (
    <div className="w-212 h-full flex mt-15 max-w-3xl mx-auto justify-center">
      <div className="w-full h-full flex items-center gap-4 text-center">
        <div className="flex flex-col items-center w-full">
          <Image
            src={produtor.foto}
            alt={produtor.nome}
            width={160}
            height={160}
            className=" object-cover w-40 h-40"
          />
          <div className="flex flex-col items-center mt-4 border-t pt-4 text-gray-700">
            <h1 className="font-bold text-2xl">Contatos</h1>
            <p>
              <strong>Telefone:</strong> {produtor.telefone}
            </p>
            <p>
              <strong>Email:</strong> {produtor.email}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center-p6">
          <h1 className="text-2xl font-bold">{produtor.nome}</h1>
          <p className="text-gray-600">
            {produtor.cidade} - {produtor.estado}
          </p>
          <p className="text-gray-500 text-sm">
            Membro desde {produtor.membroDesde}
          </p>
          <p>
            <strong>Produtos cadastrados:</strong> {produtor.produtos}
          </p>
        </div>
      </div>
    </div>
  );
}
