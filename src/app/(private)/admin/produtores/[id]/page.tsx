"use client";

import Image from "next/image";
import { PenLine, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound, useParams } from "next/navigation";
import { use, useState } from "react";

const adminProdutores = [
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    products: [
      {
        imageSrc: "/foto-produto.svg",
        title: "Cilindro alveolador doméstico",
        description:
          "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
        status: "Estado de novo",
      },
      {
        imageSrc: "/placeholder-image.svg",
        title: "Mel Puro",
        description:
          "Mel 100% puro e natural, colhido diretamente das melhores floradas. Sabor e qualidade incomparáveis.",
        status: "Novo",
      },
    ],
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    products: [],
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    products: [
      {
        imageSrc: "/foto-produto.svg",
        title: "Cera de Abelha",
        description:
          "Cera de abelha pura, ideal para a fabricação de velas, cosméticos e uso apícola.",
        status: "Novo",
      },
      {
        imageSrc: "/placeholder-image.svg",
        title: "Própolis Verde",
        description:
          "Extrato de própolis verde de alta qualidade, reconhecido por suas propriedades medicinais.",
        status: "Novo",
      },
      {
        imageSrc: "/foto-produto.svg",
        title: "Geleia Real",
        description:
          "Geleia real fresca, um superalimento rico em nutrientes para a saúde e bem-estar.",
        status: "Usado - Pouco uso",
      },
    ],
  },
];

export default function ProdutorPage({ params }: { params: { id: string } }) {
  const produtores = adminProdutores.find((p) => p.id === Number(p.id));
  if (!produtores) return notFound();
  const [isEditing, setIsEditing] = useState(false);
  const [produtor, setProdutor] = useState(produtores);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProdutor({ ...produtor, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    if (isEditing) {
      console.log("Salvando dados atualizados:", produtor);
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-end space-x-4 mb-6">
          <Button
            variant={isEditing ? "default" : "outline"}
            onClick={handleEditToggle}
          >
            {isEditing ? "Salvar" : "Editar"}
          </Button>
          <Button variant="destructive">Excluir</Button>
        </div>

        <Card className="mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center p-4">
              <Image
                src="/Apicultor png.png" // Usando a imagem do apicultor
                alt="Produtor"
                width={150}
                height={150}
                className="rounded-full object-cover mb-4"
              />
            </div>
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">Nome</h2>
                {isEditing ? (
                  <>
                    <input
                      name="nome"
                      value={produtor.nome}
                      onChange={handleChange}
                      className="border rounded-md p-2 w-full mb-2"
                    />
                    <input
                      name="cidade"
                      value={produtor.cidade}
                      onChange={handleChange}
                      className="border rounded-md p-2 w-full"
                    />
                  </>
                ) : (
                  <>
                    <p>{produtor.nome}</p>
                    <p>{produtor.cidade}</p>
                  </>
                )}
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">Contatos</h2>
                {isEditing ? (
                  <>
                    <input
                      name="telefone"
                      value={produtor.telefone}
                      onChange={handleChange}
                      className="border rounded-md p-2 w-full mb-2"
                    />
                    <input
                      name="email"
                      value={produtor.email}
                      onChange={handleChange}
                      className="border rounded-md p-2 w-full"
                    />
                  </>
                ) : (
                  <>
                    <p>{produtor.telefone}</p>
                    <p>{produtor.email}</p>
                  </>
                )}
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">ID</h2>
                <p>{produtores.id}</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Biografia</h2>
            {isEditing ? (
              <textarea
                name="description"
                value={produtor.description}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                rows={5}
              />
            ) : (
              <p>{produtor.description}</p>
            )}
          </div>
        </Card>

        <h2 className="text-2xl font-bold mb-4">Produtos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((id) => (
            <Card key={id} className="flex flex-col items-center p-4">
              <Image
                src="/placeholder-image.svg"
                alt={`Produto ${id}`}
                width={100}
                height={100}
                className="mb-2"
              />
              <CardContent className="p-0 text-center">
                <p className="font-semibold">Produto {id}</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <Button variant="ghost" size="icon">
                    <PenLine className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        /* Oculta a Navbar */
        .fixed {
          display: none !important;
        }
        /* Oculta o Footer */
        footer {
          display: none !important;
        }
      `}</style>
    </>
  );
}
